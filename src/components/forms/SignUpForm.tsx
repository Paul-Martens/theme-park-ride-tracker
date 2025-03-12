import { useActionState } from 'react';

import { useNavigate } from 'react-router';

import { supabase } from '../../services/supabase';

import { SubmitButton } from '../ui-kit/forms/SubmitButton';

import { TextField } from '../form-fields/TextField';

function SignUpForm() {
  const navigate = useNavigate();

  interface SignUpFormState {
    email?: string;
    password?: string;
  }

  const [state, action, isPending] = useActionState<SignUpFormState, FormData>(
    async (_, form) => {
      const email = form.get('email') as string;
      const password = form.get('password') as string;

      const { error } = await supabase.auth.signUp({ email, password });

      if (!error) {
        navigate('/sign-up/confirm');
      }

      return { email, password };
    },
    {},
  );

  return (
    <form action={action}>
      <TextField
        label="Email address"
        name="email"
        value={state.email}
        type="email"
        required
      />

      <TextField
        label="Password"
        name="password"
        value={state.password}
        type="password"
        required
        minLength={6}
      />

      <SubmitButton label="Register" isDisabled={isPending} />
    </form>
  );
}

export { SignUpForm };
