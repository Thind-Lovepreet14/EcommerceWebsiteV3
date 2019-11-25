USE run4it_db;

CREATE TABLE contacts
       (
		contact_id INT NOT NULL AUTO_INCREMENT,
		contact_fname VARCHAR(256) NOT NULL,
        contact_lname VARCHAR(256) NOT NULL,
		contact_email VARCHAR(256) NOT NULL,
		contact_comment VARCHAR(256) NOT NULL,
        PRIMARY KEY (contact_id)
       );
       
INSERT INTO contacts(contact_fname, contact_lname, contact_email, contact_comment)
VALUES
('Basilio', 'Dealy', 'bdealy0@paypal.com', "I purchased the spurs sweatpants. They're awesome'"),
('Greg', 'Sawdy' , 'gsawdy1@bloglovin.com', "This website's AMAZING!!"),
('Eric', 'Lampett', 'elampett2@bloglines.com', "I love Kyrie"),
('Jessica', 'Souch', 'jsouch3@epa.gov', "Please add more women's apparel"),
('Daven', 'Nannizzi', 'dnannizzi4@blogger.com', "The video background is amazing!!"),
('Dean', 'Aughton', 'daughton5@hugedomains.com', "I liked the Steady Freddy t"),
('Becca', 'Spittles', 'bspittlesc@etsy.com', "Try to bring in more Under Armour clothes"),
('Natalia', 'Beneyto', 'nbeneyto8@google.es	', "I dig these pants"),
('Emilia', 'Elgood', 'eelgood5@npr.org', 'Fantastic!'),
('Tami', 'Rontree', 'trontreec@homestead.com', 'I really enjoyed browsing this website.');

SELECT * FROM contacts;	

 
