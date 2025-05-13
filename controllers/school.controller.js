const School = require("../models/school.model.js");
const { API_SUCCESS, API_ERROR } = require("../utils/ApiStatusInstances.js");
const { Sequelize } = require("sequelize");

const typeSchema = {
  name: "string",
  address: "string",
  latitude: "number",
  longitude: "number",
};

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    const schoolFound = await School.findOne({ where: { name, address, latitude, longitude } });

    if (schoolFound) {
      console.log ('SCHOOL ALREADY EXISTS !!!!');

      return res.status(409).json({ error: "School already exists in the database!" });
    }    
    
    const school = await School.create({ name, address, latitude, longitude });

    return res.status(200).json(new API_SUCCESS("School added successfully to database!", __filename, school));
  } 
  catch (err) {
    return res.status(500).json(new API_ERROR(err, __filename, "ERROR ADDING SCHOOL TO DATABASE"));
  }
};

const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json(new API_ERROR("Invalid Coordinates", __filename, "VALIDATION ERROR"));
    }

    const haversineQuery = `
      (6371 * acos(
        cos(radians(${latitude})) * cos(radians(latitude)) *
        cos(radians(longitude) - radians(${longitude})) +
        sin(radians(${latitude})) * sin(radians(latitude))
      ))
    `;

    const schools = await School.findAll({
      attributes: [
        "id",
        "name",
        "address",
        "latitude",
        "longitude",
        [Sequelize.literal(haversineQuery), "distance"],
      ],
      order: [[Sequelize.literal("distance"), "ASC"]], 
    });

    console.log (schools);

    return res.status(200).json(new API_SUCCESS("Fetched schools sorted by proximity!", __filename, schools));
  } catch (err) {
    return res.status(500).json(new API_ERROR(err, __filename, "ERROR FETCHING DATA FROM DATABASE"));
  }
};

module.exports = {
  addSchool,
  listSchools,
};
