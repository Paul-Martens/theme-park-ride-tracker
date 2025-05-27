INSERT INTO
  parks (name)
VALUES
  ('De Efteling');

INSERT INTO
  rides (park_uuid, name)
VALUES
  (
    (
      SELECT
        uuid
      FROM
        parks
      WHERE
        name = 'De Efteling'
    ),
    'Danse Macabre'
  );

INSERT INTO
  rides (park_uuid, name)
VALUES
  (
    (
      SELECT
        uuid
      FROM
        parks
      WHERE
        name = 'De Efteling'
    ),
    'Baron 1898'
  );

INSERT INTO
  rides (park_uuid, name)
VALUES
  (
    (
      SELECT
        uuid
      FROM
        parks
      WHERE
        name = 'De Efteling'
    ),
    'Joris en de Draak'
  );

INSERT INTO
  variants (ride_uuid, name)
VALUES
  (
    (
      SELECT
        uuid
      FROM
        rides
      WHERE
        name = 'Joris en de Draak'
    ),
    'Rood'
  );

INSERT INTO
  variants (ride_uuid, name)
VALUES
  (
    (
      SELECT
        uuid
      FROM
        rides
      WHERE
        name = 'Joris en de Draak'
    ),
    'Blauw'
  );
