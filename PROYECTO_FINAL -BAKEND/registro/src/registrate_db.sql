CREATE DATABASE IF NOT EXISTS registrate_db;

USE registrate_db;

-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     avatar LONGBLOB NOT NULL,
--     usuario VARCHAR(50) NOT NULL,
--     nombre VARCHAR(50) NOT NULL,
--     contraseña VARCHAR(50) NOT NULL,
--     fecha_de_nacimiento DATE NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     ciudad VARCHAR(50) NOT NULL,    
--     sexo ENUM('hombre', 'mujer') NOT NULL
-- );

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    avatar LONGBLOB NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    contraseña VARCHAR(60) NOT NULL,
    fecha_de_nacimiento DATE NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    ciudad VARCHAR(50) NOT NULL,    
    sexo ENUM('hombre', 'mujer') NOT NULL
);