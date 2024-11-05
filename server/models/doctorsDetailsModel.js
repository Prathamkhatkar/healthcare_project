const mongoose = require("mongoose");

const doctorDetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Doctor = mongoose.model("Doctor", doctorDetailsSchema);

module.exports = Doctor;