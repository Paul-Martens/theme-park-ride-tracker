import { useActionState } from 'react';

import { supabase } from '~/services/supabase';

import type { SignUpForm } from '../types/sign-up-form';

const initialState: SignUpForm = {
  fields: {
    email: '',
    password: '',
  },
  response: {
    success: null,
    session: null,
    error: null,
  },
};

/**
 * Provides an action state for the Sign Up form.
 */
function useSignUpForm() {
  async function signUp(
    _: SignUpForm,
    formData: FormData,
  ): Promise<SignUpForm> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({ email, password });

    const success = Boolean(!error);

    return {
      fields: { email, password },
      response: { success, session, error },
    };
  }

  const [state, action] = useActionState<SignUpForm, FormData>(
    signUp,
    initialState,
  );

  return { state, action };
}

export { useSignUpForm };
