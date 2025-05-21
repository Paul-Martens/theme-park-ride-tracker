import { useActionState } from 'react';

import { supabase } from '~/services/supabase';

import type { SignInForm } from '../types/sign-in-form';

const initialState: SignInForm = {
  fields: {
    email: '',
    password: '',
  },
  results: {
    session: null,
    error: null,
  },
};

/**
 * Provides an action state for the Sign In form.
 */
function useSignInForm() {
  async function signIn(
    _: SignInForm,
    formData: FormData,
  ): Promise<SignInForm> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({ email, password });

    return {
      fields: { email, password },
      results: { session, error },
    };
  }

  const [state, action] = useActionState<SignInForm, FormData>(
    signIn,
    initialState,
  );

  return { state, action };
}

export { useSignInForm };
