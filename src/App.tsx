import { Fragment } from 'react/jsx-runtime';
import { Route, Routes } from 'react-router';

import { useUser } from '~/services/supabase';

import { Header } from '~/ui/layout/Header';

import { CurrentUser } from '~/features/account/components/CurrentUser';

import { Today } from '~/features/today/pages/Today';

import { SignUp } from '~/features/account/pages/SignUp';
import { SignIn } from '~/features/account/pages/SignIn';
import { SignOut } from '~/features/account/pages/SignOut';

import { RidesOverview } from '~/features/rides/pages/RidesOverview';
import { LogRide } from '~/features/rides/pages/LogRide';

import './App.css';

function App() {
  const { isPending } = useUser();

  if (isPending) {
    return null;
  }

  return (
    <Fragment>
      <Header>
        <CurrentUser />
      </Header>

      <Routes>
        <Route path="/" Component={Today} />

        <Route path="/account/sign-up" Component={SignUp} />
        <Route path="/account/sign-in" Component={SignIn} />
        <Route path="/account/sign-out" Component={SignOut} />

        <Route path="/rides" Component={RidesOverview} />
        <Route
          path="/rides/log/:park_uuid/:ride_uuid/:variant_uuid?"
          Component={LogRide}
        />
      </Routes>
    </Fragment>
  );
}

export { App };
