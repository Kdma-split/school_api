const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
    logging: console.log, // Enable logging (optional for debugging)
  }
);

const School = require("../models/school.model.js"); 

sequelize.authenticate()
  .then(async () => {
    console.log("Database connected successfully!");

    // **Manually create the table if it doesn't exist**
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS school_details (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    
    console.log("Table 'school_details' is ready!");
  })
  .catch(err => console.error("Database connection failed:", err));



module.exports = { sequelize, School };

