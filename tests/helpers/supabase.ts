import dotenv from 'dotenv';
import path from 'path';

import { v4 } from 'uuid';

import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve('.env.local') });

const supabase = createClient(
  process.env.VITE__SUPABASE__URL as string,
  process.env.VITE__SUPABASE__SERVICE_KEY as string,
);

interface Credentials {
  id: string;
  email: string;
  password: string;
}

function generateTemporaryCredentials(): Credentials {
  const id = v4();
  const email = `${id}@example.com`;
  const password = 'test1234';

  return { id, email, password };
}

async function createTemporaryUser(credentials: Credentials) {
  const { error } = await supabase.auth.admin.createUser({
    email_confirm: true,
    ...credentials,
  });

  if (error) {
    throw new Error(error.message);
  }
}

async function deleteTemporaryUserById(id: string) {
  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) {
    throw new Error(error.message);
  }
}

async function deleteTemporaryUserByEmail(email: string) {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) {
    throw new Error(error.message);
  }

  const user = users.find((user) => user.email === email);

  if (user) {
    deleteTemporaryUserById(user.id);
  }
}

export {
  generateTemporaryCredentials,
  createTemporaryUser,
  deleteTemporaryUserById,
  deleteTemporaryUserByEmail,
};

export type { Credentials };
