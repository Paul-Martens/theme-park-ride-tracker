CREATE TABLE IF NOT EXISTS parks (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid (),
  name TEXT NOT NULL,
  CONSTRAINT unique_park_name UNIQUE (name)
);

ALTER TABLE parks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for authenticated users" ON parks FOR
SELECT
  TO authenticated USING (TRUE);
