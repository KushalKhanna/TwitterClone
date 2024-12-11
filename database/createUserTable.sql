DROP TABLE IF EXISTS CS613Users CASCADE;

CREATE TABLE CS613Users (user_id SERIAL, "username" VARCHAR(16), "first_name" VARCHAR(16), "sur_name" VARCHAR(16), "password" VARCHAR(48), "friends" json, PRIMARY KEY (user_id) );

-- Add Altar Table for data input
