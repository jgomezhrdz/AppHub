CREATE DATABASE App_Hubb;

USE App_Hubb;

CREATE TABLE user (
    email NVARCHAR(50) NOT NULL PRIMARY KEY,
    password NVARCHAR(20)
);
ALTER TABLE user
ADD CONSTRAINT my_constraint CHECK(user.email LIKE '%_@gmail.com');

CREATE TABLE guest (
    username NVARCHAR(25) NOT NULL PRIMARY KEY,
    password NVARCHAR(20)
);
