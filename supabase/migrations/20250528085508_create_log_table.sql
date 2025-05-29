CREATE TABLE IF NOT EXISTS log(
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid (),
  auth_uuid UUID NOT NULL DEFAULT auth.uid () REFERENCES auth.users (id) ON DELETE CASCADE,
  ride_uuid UUID NOT NULL REFERENCES rides (uuid) ON DELETE CASCADE,
  variant_uuid UUID REFERENCES variants (uuid) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for authenticated users" ON log FOR
SELECT
  TO authenticated USING (TRUE);

CREATE POLICY "Enable insert access for authenticated users" ON log FOR INSERT TO authenticated
WITH
  CHECK (TRUE);
