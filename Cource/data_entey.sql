USE learning_plateform;
SHOW tables;

INSERT INTO users (email,password,fname,lname) VALUES ('ponkiyarenish@gmail.com','renish@123','renish','ponkiya');
UPDATE users SET fname = 'renishbhai' WHERE id = 1;
SELECT * FROM users;
SELECT * FROM users WHERE email = 'ponkiyarenish@gmail.com' AND password = 'renish@123';


