CREATE DATABASE App_Hubb;

USE App_Hubb;

CREATE TABLE user (
    email NVARCHAR(50) NOT NULL PRIMARY KEY,
    password NVARCHAR(20),
    telefono NVARCHAR(20),
    nombre NVARCHAR(20),
    apellidos NVARCHAR(50),
    pais NVARCHAR(20),
    ciudad NVARCHAR(20),
    codigoPostal NVARCHAR(10)
);
ALTER TABLE user
ADD CONSTRAINT my_constraint CHECK(user.email LIKE '%_@gmail.com');

CREATE TABLE guest (
    username NVARCHAR(25) NOT NULL PRIMARY KEY,
    password NVARCHAR(20)
);
