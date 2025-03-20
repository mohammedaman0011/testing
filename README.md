# FreshMarket E-commerce Application

## Database Setup Instructions

1. Install MySQL Server
   - Download MySQL Server from [MySQL Official Website](https://dev.mysql.com/downloads/mysql/)
   - Follow the installation wizard
   - During installation, set the root password
   - Make sure MySQL service is running

2. Create Database
   ```sql
   CREATE DATABASE freshmarket;
   ```

3. Update Application Configuration
   - Open `src/main/resources/application.properties`
   - Update the database password with your MySQL root password:
   ```properties
   spring.datasource.password=your_password_here
   ```

4. Start the Application
   ```bash
   mvn spring-boot:run
   ```

## Common Issues

### Database Connection Failed
- Ensure MySQL service is running
- Verify database credentials in application.properties
- Confirm database 'freshmarket' exists
- Check if MySQL is running on port 3306