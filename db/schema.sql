
CREATE DATABASE IF NOT EXISTS drinks_db;
USE drinks_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS drinks;

-- Create the burgers table
CREATE TABLE drinks (
    id int NOT NULL AUTO_INCREMENT,
    drink_name varchar(255) NOT NULL,
    chugIt BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);