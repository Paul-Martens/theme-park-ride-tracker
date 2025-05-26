import { useActionState } from 'react';

import { supabase } from '~/services/supabase';

import type { SignOutForm } from '../types/sign-out-forms';

const initialState: SignOutForm = {
  response: {
    success: null,
    error: null,
  },
};

/**
 * Provides an action state for the Sign Out form.
 */
function useSignOutForm() {
  async function signOut(): Promise<SignOutForm> {
    const { error } = await supabase.auth.signOut();

    const success = Boolean(!error);

    return {
      response: { success, error },
    };
  }

  const [state, action] = useActionState<SignOutForm>(signOut, initialState);

  return { state, action };
}

export { useSignOutForm };
