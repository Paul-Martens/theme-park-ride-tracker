CREATE TABLE IF NOT EXISTS rides (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid (),
  park_uuid UUID NOT NULL REFERENCES parks (uuid) ON DELETE CASCADE,
  name TEXT NOT NULL,
  CONSTRAINT unique_ride_name UNIQUE (park_uuid, name)
);

ALTER TABLE rides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for authenticated users" ON rides FOR
SELECT
  TO authenticated USING (TRUE);
