import { useNavigate, useSearchParams } from 'react-router';

import { supabase } from '../services/supabase';

import { Page } from '../components/layout/Page';

function ConfirmLogPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const ride_uuid = searchParams.get('ride_uuid');
  const ride_name = searchParams.get('ride_name');
  const variant_uuid = searchParams.get('variant_uuid');
  const variant_name = searchParams.get('variant_name');

  async function log() {
    if (!ride_uuid) {
      throw new Error('NO RIDE UUID');
    }

    const { error } = await supabase
      .from('log')
      .insert({ ride_uuid, variant_uuid });

    if (!error) {
      navigate('/');
    }
  }

  return (
    <Page>
      <h1>Confirm Log</h1>

      <p>
        {ride_name} {variant_name && `(${variant_name})`}
      </p>

      <div>
        <button onClick={log}>CONFIRM</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          CANCEL
        </button>
      </div>
    </Page>
  );
}

export { ConfirmLogPage };
