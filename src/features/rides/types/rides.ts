interface Ride {
  uuid: string;
  park_uuid: string;
  name: string;
}

interface Variant {
  uuid: string;
  ride_uuid: string;
  name: string;
}

interface RideWithVariant extends Ride {
  variants: Variant[];
}

export type { Ride, Variant, RideWithVariant };
