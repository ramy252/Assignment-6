/*
-- 2 Add a column “Category” to the Products table. (0.5 Grade)
ALTER TABLE products
ADD COLUMN Category
*/
/*
-- 3- Remove the “Category” column from Products. (0.5 Grade)
ALTER TABLE products
DROP COLUMN Category
*/

/*
-- 4- Change “ContactNumber” column in Suppliers to VARCHAR (15). (0.5 Grade)
ALTER TABLE suppliers
MODIFY ContactNumber VARCHAR (15)
*/
/*
-- 5- Add a NOT NULL constraint to ProductName. (0.5 Grade)
ALTER TABLE Products
MODIFY ProductName VARCHAR(100) NOT NULL;
*/
/*


6- Perform Basic Inserts: (0.5 Grade)
a. Add a supplier with the name 'FreshFoods' and contact number '01001234567'.
b. Insert the following three products, all provided by 'FreshFoods':
i. 'Milk' with a price of 15.00 and stock quantity of 50.
ii. 'Bread' with a price of 10.00 and stock quantity of 30.
iii. 'Eggs' with a price of 20.00 and stock quantity of 40.
c. Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.
Insert into supplier (SupplierName, ContactNumber) values ('FreshFoods', '01001234567');
Insert into product (ProductName, price, StockQuantity, SupplierID) values ('Milk', 15.00, 50, 1);
Insert into product (ProductName, price, StockQuantity, SupplierID) values ('Bread', 10.00, 30, 1);
Insert into product (ProductName, price, StockQuantity, SupplierID) values ('Eggs', 20.00, 40, 1);
Insert into sales (ProductID, QuantitySold, SaleDate) values (1, 2, '2025-05-20');
*/

/*
7- Update the price of 'Bread' to 25.00. (0.5 Grade)

Update product set price = 25.00 where ProductName = 'Bread';

*/
/*
8- Delete the product 'Eggs'. (0.5 Grade)

Delete from product where ProductName = 'Eggs';

*/
/*
9- Retrieve the total quantity sold for each product. (0.5 Grade)

select ProductID, sum(QuantitySold) as TotalQuantitySold from sales group by ProductID;

*/

/*
10-Get the product with the highest stock. (0.5 Grade)
select * from product where StockQuantity =(select max(StockQuantity) from product);
*/

/*
11-Find suppliers with names starting with 'F'. (0.5 Grade)
select * from supplier where SupplierName like 'F%';
*/

/*
12-Show all products that have never been sold. (0.5 Grade)
select * from product where productid not in (select productid from sales);

*/

/*
13-Get all sales along with product name and sale date. (0.5 Grade)
select * from sales inner join product on sales.ProductID = product.ProductID;

*/

/*
14-Create a user “store_manager” and give them SELECT, INSERT, and UPDATE permissions on all tables. (0.5 Grade)

CREATE USER 'store_manager'@'localhost' IDENTIFIED BY '1234';

GRANT SELECT, INSERT, UPDATE
ON *.*
TO 'store_manager'@'localhost';
*/

/*
15-Revoke UPDATE permission from “store_manager”. (0.5 Grade)
REVOKE UPDATE
ON *.*
FROM 'store_manager'@'localhost';

*/

/*
16-Grant DELETE permission to “store_manager” only on the Sales table. (0.5 Grade)
GRANT DELETE
ON your_database_name.Sales
TO 'store_manager'@'localhost';
*/
