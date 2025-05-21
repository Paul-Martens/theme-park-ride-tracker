import { useNavigate } from 'react-router';

import { Page } from '~/ui/layout/Page';

import { Form } from '~/ui/forms/Form';
import { TextField } from '~/ui/forms/TextField';
import { SubmitButton } from '~/ui/forms/SubmitButton';
import { ErrorMessage } from '~/ui/forms/ErrorMessage';

import { useSignInForm } from '../hooks/sign-in-form';

function SignIn() {
  const navigate = useNavigate();

  const { state, action } = useSignInForm();

  if (state.results.session) {
    navigate('/');
  }

  return (
    <Page>
      <h1>Sign In</h1>

      <Form action={action}>
        {state.results.error && (
          <ErrorMessage>{state.results.error.message}</ErrorMessage>
        )}

        <TextField
          label="Email Address"
          name="email"
          type="email"
          defaultValue={state.fields.email}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          defaultValue={state.fields.password}
        />

        <SubmitButton>Sign In</SubmitButton>
      </Form>
    </Page>
  );
}

export { SignIn };
