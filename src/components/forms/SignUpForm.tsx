import { useActionState } from 'react';

import { useNavigate } from 'react-router';

import { supabase } from '../../services/supabase';

import { EmailField } from '../ui-kit/forms/EmailField';
import { PasswordField } from '../ui-kit/forms/PasswordField';
import { SubmitButton } from '../ui-kit/forms/SubmitButton';

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
      <EmailField label="Email address" name="email" value={state.email} />
      <PasswordField label="Password" name="password" value={state.password} />
      <SubmitButton label="Register" isDisabled={isPending} />
    </form>
  );
}

export { SignUpForm };
