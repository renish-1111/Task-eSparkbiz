DROP DATABASE IF EXISTS jobform;
CREATE DATABASE jobform;
USE jobform;

DROP TABLE IF EXISTS states;
CREATE TABLE IF NOT EXISTS states(
    state_code INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_states_state_code PRIMARY KEY (state_code)
);

DROP TABLE IF EXISTS cities;
CREATE TABLE IF NOT EXISTS cities(
    city_code INT UNSIGNED,
    state_code INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_cities_id PRIMARY KEY (city_code),
    CONSTRAINT fk_cities_states_id FOREIGN KEY (state_code) REFERENCES states(state_code),
    CONSTRAINT uq_cities_id UNIQUE (name),  
    CONSTRAINT uq_zipcodes_city_code_cstate_code UNIQUE (city_code,state_code)

)

DROP TABLE IF EXISTS zipcodes;
CREATE TABLE IF NOT EXISTS zip(
    zipcode INT UNSIGNED,
    city_code INT UNSIGNED,
    CONSTRAINT pk_zipcodes_zipcode PRIMARY KEY (city_code),
    CONSTRAINT fk_zipcodes_cities_city_code FOREIGN KEY (city_code) REFERENCES cities(city_code),
    CONSTRAINT uq_zipcodes_zipcode_city_code UNIQUE (zipcode,city_code)
);

DROP TABLE IF EXISTS languages;
CREATE TABLE IF NOT EXISTS languages(
    id INT UNSIGNED,
    name VARCHAR(100),
    CONSTRAINT pk_languages_id PRIMARY KEY (id)
);
DROP TABLE IF EXISTS technologies;
CREATE TABLE IF NOT EXISTS technologies(
    id INT UNSIGNED,
    name VARCHAR(100),
    CONSTRAINT pk_technologies_id PRIMARY KEY (id)
);






