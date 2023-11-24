CREATE DATABASE proyectoiot;

use proyectoiot;

CREATE TABLE sensordht(
	id INT NOT NULL AUTO_INCREMENT,
    humedad FLOAT NOT NULL,
    temperatura FLOAT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

DELIMITER //
CREATE PROCEDURE saveDataSensor(IN hum FLOAT,IN temp FLOAT)
BEGIN
	INSERT INTO sensordht VALUES (hum,temp);
END //
DELIMITER ;