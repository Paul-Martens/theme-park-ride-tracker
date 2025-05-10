import { useActionState } from 'react';

import type { AuthError, User } from '@supabase/supabase-js';

import { supabase } from '~/services/supabase';

interface SignUpForm {
  fields: {
    email: string;
    password: string;
  };
  response: {
    user: User | null;
    error: AuthError | null;
  };
}

const initialState: SignUpForm = {
  fields: {
    email: '',
    password: '',
  },
  response: {
    user: null,
    error: null,
  },
};

async function signUp(_: SignUpForm, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({ email, password });

  return {
    fields: { email, password },
    response: { user, error },
  };
}

function SignUp() {
  const [state, action] = useActionState<SignUpForm, FormData>(
    signUp,
    initialState,
  );

  return (
    <main>
      <h1>Sign Up</h1>

      {state.response.user ? (
        <p>
          Thank you for signing up. Please check your email to complete the
          process.
        </p>
      ) : (
        <form action={action}>
          <div>
            <label htmlFor="email">Email Address</label>
            <br />
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
            <br />
            <input
              id="password"
              name="password"
              defaultValue={state.fields.password}
              type="password"
              minLength={6}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      )}

      {state.response.error &&
        (state.response.error.code === 'user_already_exists' ? (
          <p>An account for this email address already exists.</p>
        ) : (
          <p>Something went wrong.</p>
        ))}
    </main>
  );
}

export { SignUp };
