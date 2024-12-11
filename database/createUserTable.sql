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
