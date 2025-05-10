import type { ComponentType } from 'react';

import { Today } from '~/features/today/pages/Today';

import { SignUp } from '~/features/account/pages/SignUp';
import { SignIn } from '~/features/account/pages/SignIn';

interface Route {
  path: string;
  Component: ComponentType;
}

const routes: Route[] = [
  {
    path: '/',
    Component: Today,
  },

  {
    path: '/account/sign-up',
    Component: SignUp,
  },
  {
    path: '/account/sign-in',
    Component: SignIn,
  },
];

export { routes };
