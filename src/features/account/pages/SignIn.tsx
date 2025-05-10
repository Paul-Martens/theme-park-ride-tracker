import { useActionState } from 'react';
import { useNavigate } from 'react-router';

import { AuthError, Session } from '@supabase/supabase-js';

import { supabase } from '~/services/supabase';

interface SignInForm {
  fields: {
    email: string;
    password: string;
  };
  response: {
    session: Session | null;
    error: AuthError | null;
  };
}

const initialState: SignInForm = {
  fields: {
    email: '',
    password: '',
  },
  response: {
    session: null,
    error: null,
  },
};

async function signIn(_: SignInForm, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const {
    data: { session },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });

  return {
    fields: { email, password },
    response: { session, error },
  };
}

function SignIn() {
  const navigate = useNavigate();

  const [state, action] = useActionState<SignInForm, FormData>(
    signIn,
    initialState,
  );

  if (state.response.session) {
    navigate('/');
  }

  return (
    <main>
      <h1>Sign In</h1>

      <form action={action}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            defaultValue={state.fields.email}
            type="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            defaultValue={state.fields.password}
            type="password"
            minLength={6}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </form>

      {state.response.error &&
        (state.response.error.code === 'invalid_credentials' ? (
          <p>Either the email address or password is incorrect.</p>
        ) : (
          <p>Something went wrong.</p>
        ))}
    </main>
  );
}

export { SignIn };
