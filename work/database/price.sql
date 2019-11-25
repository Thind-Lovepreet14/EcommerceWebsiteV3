USE run4it_db;


CREATE TABLE price
       (
		price_id INT NOT NULL AUTO_INCREMENT,
		price DECIMAL(7,2) NOT NULL,
        currency CHAR(3) NOT NULL,
		discount DECIMAL(5,4),
        product_id INT NOT NULL,
        PRIMARY KEY(price_id),
        CONSTRAINT product_id
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
       );
       
INSERT INTO price(price, currency, product_id)
VALUES 
(35, 'USD', 1),
(35, 'USD', 2),
(30, 'USD', 3),
(85, 'USD', 4),
(45, 'USD', 5),
(105, 'USD', 6),
(45, 'USD', 7),
(45, 'USD', 8),
(60, 'USD', 9),
(25, 'USD', 10),
(25, 'USD', 11),
(60, 'USD', 12);

SELECT * FROM price;

