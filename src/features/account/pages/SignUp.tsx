import { Page } from '~/ui/layout/Page';

import { Form } from '~/ui/forms/Form';
import { TextField } from '~/ui/forms/TextField';
import { Button } from '~/ui/forms/Button';
import { ErrorMessage } from '~/ui/forms/ErrorMessage';

import { useSignUpForm } from '../hooks/sign-up-form';

function SignUp() {
  const { state, action } = useSignUpForm();

  return (
    <Page>
      <h1>Sign Up</h1>

      {state.response.success ? (
        <div>
          <p>
            Thank you for signing up. Please check your email to activate your
            account.
          </p>
        </div>
      ) : (
        <Form action={action}>
          {state.response.error && (
            <ErrorMessage>{state.response.error.message}</ErrorMessage>
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

          <Button type="submit">Sign Up</Button>
        </Form>
      )}
    </Page>
  );
}

export { SignUp };
