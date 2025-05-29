interface Entry {
  uuid: string;
  ride_uuid: string;
  variant_uuid: string | null;
  auth_uuid: string;
  timestamp: string;
  rides: {
    uuid: string;
    park_uuid: string;
    name: string;
  };
  variants: {
    uuid: string;
    ride_uuid: string;
    name: string;
  } | null;
}

export type { Entry };
