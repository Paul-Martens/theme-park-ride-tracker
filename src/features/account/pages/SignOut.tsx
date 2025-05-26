import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Page } from '~/ui/layout/Page';

import { Form } from '~/ui/forms/Form';
import { Button } from '~/ui/forms/Button';
import { ErrorMessage } from '~/ui/forms/ErrorMessage';

import { useSignOutForm } from '../hooks/sign-out-form';

/**
 * TODO
 * This component is way over-engineered, just to keep it in line
 * with the other account forms. Needs a simplification step when
 * form styles are more mature.
 */
function SignOut() {
  const navigate = useNavigate();

  const { action, state } = useSignOutForm();

  useEffect(() => {
    if (state.response.success) {
      navigate('/');
    }
  }, [state.response.success]);

  return (
    <Page>
      <h1>Sign Out</h1>

      <Form action={action}>
        {state.response.error && (
          <ErrorMessage>{state.response.error.message}</ErrorMessage>
        )}

        <Button type="submit">Sign Out</Button>
      </Form>
    </Page>
  );
}

export { SignOut };
