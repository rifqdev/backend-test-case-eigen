CREATE TABLE members(  
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
  borrowed_books JSON,
    penalty_end_date DATETIME,
    code VARCHAR(255) NOT NULL,
)

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  stock INT NOT NULL,
  borrowed_by VARCHAR(255),
  borrowed_at DATETIME
);

INSERT INTO members (code, name, borrowed_books, penalty_end_date)
VALUES 
('M001', 'Angga', '[]', NULL),
('M002', 'Ferry', '[]', NULL),
('M003', 'Putri', '[]', NULL);


INSERT INTO books (code, title, author, stock, borrowed_by, borrowed_at)
VALUES 
('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1, NULL, NULL),
('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1, NULL, NULL),
('TW-11', 'Twilight', 'Stephenie Meyer', 1, NULL, NULL),
('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1, NULL, NULL),
('JK-45', 'Harry Potter', 'J.K Rowling', 1, NULL, NULL);


DELETE from books;
DELETE from members;