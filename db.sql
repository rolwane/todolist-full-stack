CREATE DATABASE todolist
    DEFAULT CHARACTER SET = 'utf8mb4';

USE todolist;

CREATE TABLE IF NOT EXISTS Users (  
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL
) DEFAULT CHARSET UTF8;

CREATE TABLE IF NOT EXISTS Tasks (  
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    userId INT(11) NOT NULL,
    CONSTRAINT FK_UserTask FOREIGN KEY (userId)
    REFERENCES Users(id)
) DEFAULT CHARSET UTF8;
