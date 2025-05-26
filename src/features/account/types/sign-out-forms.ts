import type { AuthError } from '@supabase/supabase-js';

interface SignOutForm {
  response: {
    success: boolean | null;
    error: AuthError | null;
  };
}

export type { SignOutForm };
