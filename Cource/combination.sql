CREATE DATABASE demo;

use demo;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

INSERT INTO users (name) VALUES ("jagu");

CREATE TABLE posts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);
INSERT INTO posts (name) VALUES ("normal");

DROP TABLE IF EXISTS followers;
CREATE TABLE followers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    post_id INT,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts(id)
    );
SELECT * from users;
select * from posts;
INSERT INTO followers (user_id,post_id) VALUES (1,1);
SELECT * from followers;