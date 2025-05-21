import dotenv from 'dotenv';
import path from 'path';

import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve('.env.local') });

const supabase = createClient(
  process.env.VITE__SUPABASE__URL as string,
  process.env.VITE__SUPABASE__SERVICE_KEY as string,
);

async function deleteAllUsers() {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) {
    throw new Error(error.message);
  }

  users.forEach(async (user) => {
    await supabase.auth.admin.deleteUser(user.id);
  });
}

export { deleteAllUsers };
