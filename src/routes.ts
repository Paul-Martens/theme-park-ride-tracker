import type { ComponentType } from 'react';

import { Today } from '~/features/today/pages/Today';

import { SignUp } from '~/features/account/pages/SignUp';

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
];

export { routes };
