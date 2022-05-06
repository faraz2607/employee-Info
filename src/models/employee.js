const express = require("express");
const { default: mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    addedOn: {
        type: String,
        required: true,
    }
})

// creating a new collection
const EmployeeDetails = new mongoose.model("employee-details", employeeSchema)

module.exports = EmployeeDetails;