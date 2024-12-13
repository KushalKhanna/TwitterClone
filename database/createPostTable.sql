CREATE TABLE twixxpost (
    postid SERIAL PRIMARY KEY,
    username VARCHAR(20),
    postcontent TEXT
);

-- Insert example posts for each user
INSERT INTO twixxpost (username, postContent)
VALUES
    ('jdoe', 'Hello world! This is my first post! #excited'),
    ('asmith', 'Just finished reading a great book. Highly recommend it! #booklover'),
    ('jane_doe', 'Had an amazing day at the beach with friends! #sunnydays'),
    ('rbrown', 'Check out this new music album I discovered today! #musiclover'),
    ('kbaker', 'Loving the new tech gadget I got today! Its a game changer. #techie');

