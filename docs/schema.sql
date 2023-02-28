DROP TABLE IF EXISTS SavedMetaInfo;
DROP TABLE IF EXISTS MetaInfo;
DROP TABLE IF EXISTS SavedInfo;
DROP TABLE IF EXISTS Keyword;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_num VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL 
);

CREATE TABLE SavedInfo (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    image_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFRENCES User(id),
    FOREIGN KEY (image_id) REFRENCES MetaInfo(id)
);

CREATE TABLE Keyword (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE MetaInfo (
    id SERIAL PRIMARY KEY,
    keyword_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    file_type VARCHAR(10) NOT NULL,
    tags TEXT,
    metadata JSON,
    FOREIGN KEY (keyword_id) REFRENCES Keyword(id)

);

CREATE TABLE  SavedMetaInfo (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    meta_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFRENCES USER(id),
    FOREIGN KEY (meta_id) REFRENCES MetaInfo(id)
);

INSERT INTO Keyword (name) VALUES
    ('happy'),
    ('sad'),
    ('angry'),
    ('funny');

INSERT INTO User (first_name, last_name, phone_num, email, password) VALUES
    ('John', 'Doe', '555-1234', 'johndoe@example.com', 'password123'),
    ('Jane', 'Doe', '555-5678', 'janedoe@example.com', 'password456');

INSERT INTO MetaInfo (keyword_id, url, file_type, tags, metadata) VALUES
    (1, 'https://example.com/happy.gif', 'gif', 'happy,smile', '{"width": "200", "height": "200"}'),
    (2, 'https://example.com/sad.png', 'png', 'sad,tear', '{"width": "300", "height": "300"}'),
    (3, 'https://example.com/angry.jpg', 'jpg', 'angry,frown', '{"width": "400", "height": "400"}'),
    (4, 'https://example.com/funny.gif', 'gif', 'funny,laugh', '{"width": "500", "height": "500"}');

 INSERT INTO SavedInfo (user_id, image_id) VALUES
    (1, 2),
    (1, 4),
    (2, 1),
    (2, 3);

INSERT INTO SavedMetaInfo (user_id, meta_id) VALUES
    (1, 2),
    (1, 4),
    (2, 1),
    (2, 3);