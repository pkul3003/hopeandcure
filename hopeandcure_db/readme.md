to export the database, use the command
mysqldump -u root -p hmsdb > hmsdb_export.sql

to import it back, use the command
mysql -u root -p hmsdb < hmsdb_export.sql
