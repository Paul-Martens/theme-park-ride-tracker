import { useNavigate } from 'react-router';

import { supabase } from '../services/supabase';

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

  async function log(ride_uuid: string, variant_uuid?: string) {
    const { error } = await supabase
      .from('log')
      .insert({ ride_uuid, variant_uuid });

    if (!error) {
      navigate('/');
    }
  }

  return (
    <article className="Ride">
      <h1>{name}</h1>

      {variants.length ? (
        variants.map((variant) => (
          <button
            key={variant.uuid}
            onClick={() => {
              log(uuid, variant.uuid);
            }}
          >
            REGISTER VARIANT {variant.name}
          </button>
        ))
      ) : (
        <button
          onClick={() => {
            log(uuid);
          }}
        >
          REGISTER
        </button>
      )}
    </article>
  );
}

export { Ride };
