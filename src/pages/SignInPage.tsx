import { Page } from '../components/layout/Page';

import { SignInForm } from '../components/forms/SignInForm';

function SignInPage() {
  return (
    <Page>
      <h1>Sign In</h1>

      <SignInForm />
    </Page>
  );
}

export { SignInPage };
