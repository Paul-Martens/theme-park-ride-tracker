CREATE TABLE IF NOT EXISTS variants (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid (),
  ride_uuid UUID NOT NULL REFERENCES rides (uuid) ON DELETE CASCADE,
  name TEXT NOT NULL,
  CONSTRAINT unique_variant_name UNIQUE (ride_uuid, name)
);

ALTER TABLE variants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for authenticated users" ON variants FOR
SELECT
  TO authenticated USING (TRUE);
