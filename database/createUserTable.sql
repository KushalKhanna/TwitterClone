DROP TABLE IF EXISTS CS613Users CASCADE;

CREATE TABLE CS613Users (
    user_id SERIAL, 
    "username" VARCHAR(16) NOT NULL, 
    "first_name" VARCHAR(16) NOT NULL, 
    "sur_name" VARCHAR(16) NOT NULL, 
    "password" VARCHAR(48) NOT NULL, 
    "friends" json, 
    PRIMARY KEY (user_id) );

-- Add Altar Table for data input
INSERT INTO CS613Users ("username", "first_name", "sur_name", "password", "friends")
VALUES 
    ('jdoe', 'John', 'Doe', 'password123', '["jane_doe", "asmith"]'),
    ('asmith', 'Alice', 'Smith', 'securepwd1', '["jdoe"]'),
    ('jane_doe', 'Jane', 'Doe', 'mypassword', '["jdoe", "asmith", "rbrown"]'),
    ('rbrown', 'Robert', 'Brown', 'pass4robert', '["jane_doe", "kbaker"]'),
    ('kbaker', 'Karen', 'Baker', 'bakersecure1', '["rbrown"]');

SELECT * FROM CS613Users;