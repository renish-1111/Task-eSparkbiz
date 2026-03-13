DROP DATABASE IF EXISTS learning_plateform;

CREATE DATABASE IF NOT EXISTS learning_plateform;

use learning_plateform;

SHOW tables;

-- users Table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    is_active TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '0=False, 1=True',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_users_id PRIMARY KEY (id),
    CONSTRAINT uq_users_email UNIQUE (email),
    CONSTRAINT chk_users_active CHECK (is_active in (0, 1)),
    INDEX idx_users_active (is_active),
    INDEX idx_login (email, password)
);

DROP TABLE IF EXISTS instructers;

CREATE TABLE instructers (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    is_active TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '0=False, 1=True',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_instructers_id PRIMARY KEY (id),
    CONSTRAINT uq_instructers_email UNIQUE (email),
    CONSTRAINT chk_instructers_active CHECK (is_active in (0, 1)),
    INDEX idx_instructers_active (is_active),
    INDEX idx_login (email, password)
);

DROP TABLE IF EXISTS courses;

CREATE TABLE IF NOT EXISTS courses (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    instructer_id BIGINT UNSIGNED,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(4, 2) UNSIGNED NOT NULL DEFAULT 0,
    is_active TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '0=False, 1=True',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_courses_id PRIMARY KEY (id),
    CONSTRAINT fk_courses_instructers_id FOREIGN KEY (instructer_id) REFERENCES instructers (id),
    CONSTRAINT chk_courses_is_active CHECK (is_active IN (0, 1)),
    CONSTRAINT chk_courses_price CHECK (price >= 0),
    INDEX idx_courses_active (is_active)
)

DROP TABLE IF EXISTS payments;

CREATE TABLE IF NOT EXISTS payments (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    user_id BIGINT UNSIGNED NOT NULL,
    course_id BIGINT UNSIGNED NOT NULL,
    status TINYINT UNSIGNED NOT NULL COMMENT '0=Fail, 1=Success',
    price DECIMAL(7, 2) UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_payments_id PRIMARY KEY (id),
    CONSTRAINT fk_payments_users_id Foreign Key (user_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT fk_payments_courses_id Foreign Key (course_id) REFERENCES courses (id) ON DELETE CASCADE,
    CONSTRAINT chk_payments_status CHECK (status IN (0, 1)),
    CONSTRAINT chk_payments_price CHECK (price >= 0),
    INDEX idx_payments_status (status)
);

DROP TABLE IF EXISTS enrolls;

CREATE TABLE IF NOT EXISTS enrolls (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    user_id BIGINT UNSIGNED NOT NULL,
    course_id BIGINT UNSIGNED NOT NULL,
    payment_id BIGINT UNSIGNED NOT NULL,
    status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=Not Start, 1=Pendding, 2=Complete',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_enrolls_id PRIMARY KEY (id),
    CONSTRAINT uq_enrolls_payment_id UNIQUE (payment_id),
    CONSTRAINT fk_enrolls_users_id Foreign Key (user_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT fk_enrolls_courses_id Foreign Key (course_id) REFERENCES courses (id) ON DELETE CASCADE,
    CONSTRAINT fk_enrolls_payments_id Foreign Key (payment_id) REFERENCES payments (id) ON DELETE CASCADE,
    CONSTRAINT chk_enrolls_status CHECK (status IN (0, 1, 2)),
    INDEX idx_enrolls_status (status)
)

DROP TABLE IF EXISTS lessons;

CREATE TABLE IF NOT EXISTS lessons (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    course_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    contant VARCHAR(255) NOT NULL,
    video_link VARCHAR(255),
    image_link VARCHAR(255),
    order_number DECIMAL(2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_lessons_id PRIMARY KEY (id),
    CONSTRAINT fk_lessons_courses_id FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE,
    INDEX idx_lessons_order_number (order_number)
);

DROP TABLE IF EXISTS progress;

CREATE TABLE IF NOT EXISTS progress (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    user_id BIGINT UNSIGNED NOT NULL,
    enroll_id BIGINT UNSIGNED NOT NULL,
    lesson_id BIGINT UNSIGNED NOT NULL,
    status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0 = NOT START, 1 = IN PROGRESS, 2 = COMPLETE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_progress_id PRIMARY KEY (id),
    CONSTRAINT fk_progress_users_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT fk_progress_enrolls_id FOREIGN KEY (enroll_id) REFERENCES enrolls (id) ON DELETE CASCADE,
    CONSTRAINT fk_progress_lessons_id FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE,
    CONSTRAINT chk_progress_status CHECK (status IN (0, 1, 2)),
    INDEX idx_progress_status (status)
);

DROP TABLE IF EXISTS exams;

CREATE TABLE IF NOT EXISTS exams (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    course_id BIGINT UNSIGNED NOT NULL,
    instructer_id BIGINT UNSIGNED NOT NULL,
    type TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0 = Single Ans, 1 = Mulltiple Ans',
    data_of_exam DATE NOT NULL,
    mark INT NOT NULL
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_exams_id PRIMARY KEY (id),
    CONSTRAINT fk_exams_courses_id FOREIGN KEY (course_id) REFERENCES courses (id) on DELETE CASCADE,
    CONSTRAINT fk_exams_instructers_id FOREIGN KEY (instructer_id) REFERENCES instructers (id) on DELETE CASCADE,
    CONSTRAINT chk_exams_type CHECK (type IN (0, 1))
);

DROP TABLE IF EXISTS queations;

CREATE TABLE IF NOT EXISTS queations (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    exam_id BIGINT UNSIGNED NOT NULL,
    que VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_exam_papers_id PRIMARY KEY (id),
    CONSTRAINT fk_exam_papers_exams_exam_id FOREIGN KEY (exam_id) REFERENCES exams(id)
);
DROP TABLE IF EXISTS options;
CREATE TABLE IF NOT EXISTS options (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    exam_paper_id BIGINT UNSIGNED NOT NULL,
    option_char VARCHAR(1) NOT NULL,
    option_value VARCHAR(255) NOT NULL,
    ans TINYINT UNSIGNED NOT NULL COMMENT "0=FALSE , 1=TRUE",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT pk_options_id PRIMARY KEY (id),
    CONSTRAINT fk_options_exam_papers_exam_paper_id FOREIGN KEY (exam_paper_id) REFERENCES exam_papers(id),
    CONSTRAINT chk_options_ans CHECK (ans IN (0,1))
);
DROP TABLE IF EXISTS attempts;
CREATE TABLE IF NOT EXISTS attempts(
    user_id BIGINT UNSIGNED NOT NULL,
    qus_id BIGINT UNSIGNED NOT NULL,
    is_right TINYINT UNSIGNED NOT NULL COMMENT "0=False , 1=True",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_attempts_user_id_qus_id PRIMARY KEY (user_id,qus_id),
    CONSTRAINT chk_attempts_is_right CHECK (is_right IN (0,1))
);

DROP TABLE IF EXISTS results;
CREATE TABLE IF NOT EXISTS results(
    id BIGINT UNSIGNED,
    exam_id BIGINT UNSIGNED NOT NULL,
    enroll_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    mark INT UNSIGNED NOT NULL,
    is_passed TINYINT NOT NULL,

    CONSTRAINT pk_results_exam_id_enroll_id_user_id UNIQUE (exam_id,enroll_id,user_id),
    CONSTRAINT chk_results_marks CHECK (mark > 0),
    CONSTRAINT chk_results_is_passed CHECK (is_passed IN (0,1))
);

DROP TABLE IF EXISTS cirtificates;
CREATE TABLE IF NOT EXISTS cirtificates(
    id UUID,
    user_id,
    enroll_id,
    coruse_id,
    

);




