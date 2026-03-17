DROP DATABASE IF EXISTS jobapplication;

CREATE DATABASE jobapplication;

USE jobapplication;

DROP TABLE IF EXISTS languages;

CREATE TABLE IF NOT EXISTS languages (
    id INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_languages_id PRIMARY KEY (id)
);

INSERT INTO
    languages (id, name)
VALUES (1, 'HINDI'),
    (2, 'GUJARATI'),
    (3, 'FRENCH'),
    (4, 'ENGLISH'),
    (5, 'TAMIL'),
    (6, "MARATHI");

DROP TABLE IF EXISTS technologies;

CREATE TABLE IF NOT EXISTS technologies (
    id INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_technologies_id PRIMARY KEY (id)
);

INSERT INTO
    technologies (id, name)
VALUES (1, 'PHP'),
    (2, 'JAVA'),
    (3, 'C'),
    (4, 'MYSQL');

DROP TABLE IF EXISTS relationship_status;

CREATE TABLE IF NOT EXISTS relationship_status (
    id INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_relationship_status_id PRIMARY KEY (id)
);

INSERT INTO
    relationship_status (id, name)
values (1, 'SINGLE'),
    (2, 'MARRIED'),
    (3, 'DIVORCED'),
    (4, 'WIDOWED');

DROP TABLE IF EXISTS deparments;

CREATE TABLE IF NOT EXISTS deparments (
    id INT UNSIGNED,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT pk_deparments_id PRIMARY KEY (id)
);

INSERT INTO
    deparments (id, name)
VALUES (1, "HR"),
    (2, "IT"),
    (3, "MARKETING")

DROP TABLE IF EXISTS basic_details;

CREATE TABLE IF NOT EXISTS basic_details (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    gender TINYINT UNSIGNED NOT NULL COMMENT "0 = MALE , 1 = FEMALE",
    bod DATE NOT NULL,
    relationship_status_id INT UNSIGNED NOT NULL COMMENT "1 = SINGLE , 2 = MARRIED , 3 = DIVORCED , 4 = WIDOWED",
    CONSTRAINT pk_basic_detail_id PRIMARY KEY (id),
    CONSTRAINT uq_basic_detail_email UNIQUE (email),
    CONSTRAINT chk_basic_detail_phone CHECK (
        LENGTH(phone) BETWEEN 10 AND 13
    ),
    CONSTRAINT chk_basic_detail_gender CHECK (gender IN (0, 1)),
    CONSTRAINT fk_basic_detail_relationship_status_relationship_status_id FOREIGN KEY (relationship_status_id) REFERENCES relationship_status (id)
)

DROP TABLE IF EXISTS addresses;

CREATE TABLE IF NOT EXISTS addresses (
    candidate_id BIGINT UNSIGNED NOT NULL,
    address1 VARCHAR(255) NOT NULL,
    address2 VARCHAR(255),
    `state` VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    zipcode VARCHAR(6) NOT NULL,
    CONSTRAINT pk_addresses_candidate_id PRIMARY KEY (candidate_id),
    CONSTRAINT fk_addresses_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id)
);

DROP TABLE IF EXISTS educations;

CREATE TABLE IF NOT EXISTS educations (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    candidate_id BIGINT UNSIGNED NOT NULL,
    degree_name VARCHAR(255) NOT NULL,
    university VARCHAR(255) NOT NULL,
    passing_year YEAR NOT NULL,
    percentage DECIMAL(5, 2) NOT NULL,
    CONSTRAINT pk_educations_id PRIMARY KEY (id),
    CONSTRAINT fk_educations_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id),
    CONSTRAINT chk_educations_percentage CHECK (percentage BETWEEN 0 AND 100),
    CONSTRAINT chk_educations_passing_year CHECK (
        passing_year <= YEAR(SYSDATE())
    )
);

DROP TABLE IF EXISTS experience;

CREATE TABLE IF NOT EXISTS experience (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    candidate_id BIGINT UNSIGNED NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    from_date DATE NOT NULL,
    to_date DATE NOT NULL,
    CONSTRAINT pk_experience_id PRIMARY KEY (id),
    CONSTRAINT fk_experience_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id),
    CONSTRAINT chk_experience_dates CHECK (from_date <= to_date)
);

DROP TABLE IF EXISTS candidate_languages;

CREATE TABLE IF NOT EXISTS candidate_languages (
    candidate_id BIGINT UNSIGNED NOT NULL,
    language_id INT UNSIGNED NOT NULL,
    can_read TINYINT UNSIGNED NOT NULL COMMENT "0 = NO , 1 = YES",
    can_write TINYINT UNSIGNED NOT NULL COMMENT "0 = NO , 1 = YES",
    can_speak TINYINT UNSIGNED NOT NULL COMMENT "0 = NO , 1 = YES",
    CONSTRAINT pk_candidate_languages_candidate_id_language_id PRIMARY KEY (candidate_id, language_id),
    CONSTRAINT fk_candidate_languages_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id),
    CONSTRAINT fk_candidate_languages_languages_language_id FOREIGN KEY (language_id) REFERENCES languages (id),
    CONSTRAINT chk_candidate_languages_read CHECK (can_read IN (0, 1)),
    CONSTRAINT chk_candidate_languages_write CHECK (can_write IN (0, 1)),
    CONSTRAINT chk_candidate_languages_speak CHECK (can_speak IN (0, 1))
);

DROP TABLE IF EXISTS candidate_technologies;

CREATE TABLE IF NOT EXISTS candidate_technologies (
    candidate_id BIGINT UNSIGNED NOT NULL,
    technology_id INT UNSIGNED NOT NULL,
    experty_level TINYINT UNSIGNED NOT NULL COMMENT "1 = BEGINNER , 2 = INTERMEDIATE , 3 = EXPERT",
    CONSTRAINT pk_candidate_technologies_candidate_id_technology_id PRIMARY KEY (candidate_id, technology_id),
    CONSTRAINT fk_candidate_technologies_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id),
    CONSTRAINT fk_candidate_technologies_technologies_technology_id FOREIGN KEY (technology_id) REFERENCES technologies (id),
    CONSTRAINT chk_candidate_technologies_experty_level CHECK (experty_level IN (1, 2, 3))
);

DROP TABLE IF EXISTS candidate_referance;

CREATE TABLE IF NOT EXISTS candidate_referance (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    candidate_id BIGINT UNSIGNED NOT NULL,
    ref_name VARCHAR(255) NOT NULL,
    ref_contact VARCHAR(12) NOT NULL,
    relations VARCHAR(255) NOT NULL,
    CONSTRAINT pk_candidate_referance_id PRIMARY KEY (id),
    CONSTRAINT fk_candidate_referance_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id)
);

DROP TABLE IF EXISTS candidate_prefrence;

CREATE TABLE IF NOT EXISTS candidate_prefrence (
    candidate_id BIGINT UNSIGNED NOT NULL,
    location VARCHAR(255) NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    notice_period INT UNSIGNED NOT NULL COMMENT "Notice period in days",
    expected_ctc DECIMAL(7) NOT NULL COMMENT "Expected CTC in indian rupees",
    current_ctc DECIMAL(7) NOT NULL COMMENT "Current CTC in indian rupees",
    CONSTRAINT pk_candidate_prefrence_candidate_id_department_id PRIMARY KEY (candidate_id, department_id),
    CONSTRAINT fk_candidate_prefrence_basic_detail_candidate_id FOREIGN KEY (candidate_id) REFERENCES basic_details (id),
    CONSTRAINT fk_candidate_prefrence_deparments_department_id FOREIGN KEY (department_id) REFERENCES deparments (id)
);