import type { AuthError, Session } from '@supabase/supabase-js';

interface SignInForm {
  fields: {
    email: string;
    password: string;
  };
  results: {
    session: Session | null;
    error: AuthError | null;
  };
}

export type { SignInForm };
