
The application does not use root user on mySQL. So on the MySQL  prompt.. run below commands to create a new user that is configured to run DML commands on mySQL database - hmsdb.

CREATE USER hms_admin@'localhost' identified by 'Hope&Cure@123';

grant all privileges on hmsdb.* to 'hms_admin'@'localhost';

alter user hms_admin@'localhost' identified with mysql_native_password by 'Hope&Cure@123';

create database hmsdb;

logout from db and come on the OS command prompt (Windows or Linux)

to export the database, use the command
mysqldump -u root -p hmsdb > hmsdb_export.sql

to import it back, use the command
mysql -u root -p hmsdb < hmsdb_export.sql
