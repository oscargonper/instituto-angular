
DROP DATABASE IF EXISTS ciclos;
CREATE DATABASE ciclos CHARACTER SET utf8mb4;;
USE ciclos;

CREATE TABLE ciclos (
  id_ciclo varchar(3) PRIMARY KEY,
  id_familia varchar(3) NOT NULL,
  nombre varchar(40) DEFAULT NULL
);

CREATE TABLE modulos (
  id_modulo varchar(6) PRIMARY KEY,
  nombre varchar(50) DEFAULT NULL,
  id_ciclo varchar(3) NOT NULL,
  FOREIGN KEY (id_ciclo) REFERENCES ciclos(id_ciclo)
);

CREATE TABLE personas (
  alias varchar(6) PRIMARY KEY,
  nombre varchar(50) NOT NULL,
  edad int NOT NULL,
  email varchar(40) DEFAULT NULL,
  id_modulo varchar(6) DEFAULT NULL
);


INSERT INTO ciclos (id_ciclo, id_familia, nombre)
VALUES
("DAW","INF","Desarrollo de aplicaciones Web"),
("ASI","INF","Administracion de Sistemas Informáticos y Redes");


INSERT INTO modulos (id_modulo, nombre, id_ciclo)
VALUES
("DAW_SI",'Sistemas informáticos',"DAW"),
("DAW_BD",'Bases de datos',"DAW"),
("DAW_PR",'Programación',"DAW"),
("DAW_LM",'Lenguajes de marcas y sistemas de gestión de información',"DAW"),
("DAW_ED",'Entornos de desarrollo',"DAW"),
("DAW_DC",'Desarrollo web en entorno cliente',"DAW"),
("DAW_DS",'Desarrollo web en entorno servidor',"DAW"),
("DAW_DA",'Despliegue de aplicaciones web',"DAW"),
("ASI_AS",'Administración de sistemas operativos',"ASI"),
("ASI_FH",'Fundamentos de Hardware',"ASI");;
