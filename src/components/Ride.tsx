import { useNavigate } from 'react-router';

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

  return (
    <article className="Ride">
      <h1>{name}</h1>

      {variants.length ? (
        variants.map((variant) => (
          <button
            key={variant.uuid}
            onClick={() => {
              log(uuid, name, variant.uuid, variant.name);
            }}
          >
            REGISTER VARIANT {variant.name}
          </button>
        ))
      ) : (
        <button
          onClick={() => {
            log(uuid, name);
          }}
        >
          REGISTER
        </button>
      )}
    </article>
  );
}

export { Ride };
