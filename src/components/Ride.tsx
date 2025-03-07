import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';

import { supabase } from '../services/supabase';

import { Dialog } from './ui-kit/layout/Dialog';
import { Text } from './ui-kit/layout/Text';

interface RideProps {
  uuid: string;
  name: string;
  variants: {
    uuid: string;
    name: string;
  }[];
}

function Ride({ uuid, name, variants }: RideProps) {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);

  async function log(
    ride_uuid: string,
    ride_name: string,
    variant_uuid?: string,
    variant_name?: string,
  ) {
    if (variant_uuid) {
      return navigate(
        `/rides/confirm/?ride_uuid=${ride_uuid}&ride_name=${ride_name}&variant_uuid=${variant_uuid}&variant_name=${variant_name}`,
      );
    }

    return navigate(
      `/rides/confirm/?ride_uuid=${ride_uuid}&ride_name=${ride_name}`,
    );
  }

  const { data } = supabase.storage.from('rides').getPublicUrl(`${uuid}.jpg`);

  return (
    <Fragment>
      {showDialog && (
        <Dialog
          onClick={() => {
            setShowDialog(false);
          }}
        >
          <Text>
            <h1>{name}</h1>

            {variants.length ? (
              variants.map((variant) => (
                <p>
                  <button
                    key={variant.uuid}
                    onClick={() => {
                      log(uuid, name, variant.uuid, variant.name);
                    }}
                  >
                    Log ride variant {variant.name}!
                  </button>
                </p>
              ))
            ) : (
              <p>
                <button
                  onClick={() => {
                    log(uuid, name);
                  }}
                >
                  Log this ride!
                </button>
              </p>
            )}
          </Text>
        </Dialog>
      )}

      <article
        className="Ride"
        onClick={() => {
          setShowDialog(true);
        }}
        style={{ backgroundImage: `url('${data.publicUrl}')` }}
      >
        <h2>{name}</h2>
      </article>
    </Fragment>
  );
}

export { Ride };
