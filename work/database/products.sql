DROP DATABASE IF EXISTS run4it_db;

CREATE DATABASE run4it_db;

USE run4it_db;


CREATE TABLE products
       (
		product_id INT NOT NULL AUTO_INCREMENT,
		product_name VARCHAR(256) NOT NULL,
        product_type VARCHAR(256) NOT NULL,
		product_category VARCHAR(256) NOT NULL,
		image VARCHAR(256) NOT NULL,
        PRIMARY KEY (product_id)
       );
       
INSERT INTO products(product_name, product_type, product_category, image)
VALUES ("Kyrie Nike Dri-FIT 'Friends'", "mens", "Men's Basketball T-Shirt", "./images/product-kyrie.jpg"),
		("LeBron James Nike Dri-FIT 'MVP'", "mens", "Men's NBA T-Shirt","./images/product-lebron.webp"),
        ("FVV 'Overlooked' T-Shirt", "mens", "Men's Basketball T-Shirt","./images/product-fred.png"),
        ("Giannis 'Freak'", "mens", "Men's Basketball Hoodie","./images/product-freak.jpg"),
        ("Tiro 19 Training Pants", "mens", "Men's Soccer", "./images/product-tiro.jpg"),
        ("San Antonio Spurs Nike Therma Flex Showtime", "mens", "Men's NBA Pants","./images/product-spurs.jpg"),
        ("UA Sportstyle Pique", "mens", "Men's Pants","./images/product-ua-sportstyle.jpg"),
        ("Men’s Speed Pants", "mens", "Men's Pants","./images/product-puma-speed.jpg"),
        ("Believe This High Rise 7/8 Tights", "womans", "Women's Training","./images/product-believe.jpg"),
        ("UA Play Up 3.0 Twist","womans", "Women's Shorts","./images/product-us-play.jpeg"),
        ("Studio Mesh Women's Tank", "womans", "Women's Tank Top","./images/product-mesh-studio.jpg"),
        ("Wanderlust Warp Knit Crop Top", "womans", "Women's Training","./images/product-wanderlust.webp");
        
        
SELECT * FROM products;

