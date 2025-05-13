const express = require("express");
const SchoolControllers = require("../controllers/school.controller.js");
const validateSchoolInputs = require("../middlewares/validateInputs.middleware.js");

const router = express.Router();

router.post('/addSchool', validateSchoolInputs, SchoolControllers.addSchool); 
router.get("/listSchools", SchoolControllers.listSchools);

module.exports = router;
