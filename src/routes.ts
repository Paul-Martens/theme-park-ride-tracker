import { useEffect, useState } from 'react';

import type { ComponentType } from 'react';

import { useSession } from '~/services/supabase';

import { Today } from '~/features/today/pages/Today';

import { SignUp } from '~/features/account/pages/SignUp';
import { SignIn } from '~/features/account/pages/SignIn';

interface Route {
  path: string;
  Component: ComponentType;
}

const configuration = [
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

function useRoutes() {
  const [routes, setRoutes] = useState<Route[]>(configuration);

  const { session } = useSession();

  useEffect(() => {
    setRoutes(
      configuration.map((route) =>
        !session &&
        route.path !== '/account/sign-in' &&
        route.path !== '/account/sign-up'
          ? { ...route, Component: SignIn }
          : route,
      ),
    );
  }, [session]);

  return { routes };
}

export { useRoutes };
