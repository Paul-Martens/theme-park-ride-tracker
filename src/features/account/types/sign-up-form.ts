import type { AuthError, Session } from '@supabase/supabase-js';

interface SignUpForm {
  fields: {
    email: string;
    password: string;
  };
  response: {
    session: Session | null;
    error: AuthError | null;
  };
}

export type { SignUpForm };
