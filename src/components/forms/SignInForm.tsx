import { useActionState } from 'react';

import { useNavigate } from 'react-router';

import { supabase } from '../../services/supabase';

import { SubmitButton } from '../ui-kit/forms/SubmitButton';

import { TextField } from '../form-fields/TextField';

function SignInForm() {
  const navigate = useNavigate();

  interface SignInFormState {
    email?: string;
    password?: string;
  }

  const [state, action, isPending] = useActionState<SignInFormState, FormData>(
    async (_, form) => {
      const email = form.get('email') as string;
      const password = form.get('password') as string;

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error) {
        navigate('/');
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

export { SignInForm };
