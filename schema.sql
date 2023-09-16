DROP TABLE IF EXISTS courts CASCADE;
CREATE TABLE courts (
    id integer NOT NULL,
    location_name character varying(255),
    court_address character varying(255),
    coordinate point,
    courttype character varying(100),
    player_count integer DEFAULT 0
);

-- load csv files into DB

COPY courts
FROM '/Users/patrickalexandre/Desktop/DenverRecCenters.csv'
DELIMITER ','
CSV HEADER;