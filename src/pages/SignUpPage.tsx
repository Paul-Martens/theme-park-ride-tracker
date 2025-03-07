import { Page } from '../components/ui-kit/layout/Page';

import { SignUpForm } from '../components/forms/SignUpForm';

function SignUpPage() {
  return (
    <Page>
      <h1>Sign Up</h1>

      <SignUpForm />
    </Page>
  );
}

export { SignUpPage };
