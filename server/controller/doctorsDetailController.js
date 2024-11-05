const asyncHandler = require("express-async-handler");
const Doctor = require("../models/doctorsDetailsModel"); // Make sure to create this model
require("dotenv").config();

const registerDoctor = asyncHandler(async (req, res) => {
    const { name, email, speciality, phoneNumber, experience, address } = req.body;

    // Validate all required fields
    if (!name || !email || !speciality || !phoneNumber || !experience || !address) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if the doctor already exists
    const doctorExists = await Doctor.findOne({ email });
    if (doctorExists) {
        return res.status(400).json({ message: "Doctor already exists" });
    }

    // Create a new doctor
    const newDoctor = await Doctor.create({
        name,
        email,
        speciality,
        phoneNumber,
        experience,
        address,
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
});

module.exports = { registerDoctor };