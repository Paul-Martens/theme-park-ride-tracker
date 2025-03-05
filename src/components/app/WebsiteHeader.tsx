import { Header } from '../layout/Header';

import { CurrentUser } from './CurrentUser';
import { WebsiteTitle } from './WebsiteTitle';

function WebsiteHeader() {
  return (
    <Header>
      <WebsiteTitle />
      <CurrentUser />
    </Header>
  );
}

export { WebsiteHeader };
