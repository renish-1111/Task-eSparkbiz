DROP DATABASE IF EXISTS db_student;
CREATE DATABASE IF NOT EXISTS db_student;

use db_student;
DROP TABLE IF EXISTS student;
CREATE TABLE IF NOT EXISTS student(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender TINYINT NOT NULL COMMENT "0=female,1=male",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_student_id PRIMARY KEY (id),
    CONSTRAINT uk_student_email UNIQUE(email),
    CONSTRAINT chk_student_phone CHECK (LENGTH(phone) = 10),
    CONSTRAINT chk_student_gender CHECK (gender IN (0,1))
) 