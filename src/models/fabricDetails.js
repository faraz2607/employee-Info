const express = require("express");
const { default: mongoose } = require("mongoose");

const fabricSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    terrycotLungi: {
        type: Number,
        required: true,
    },
    terrycotLungiPrice: {
        type: Number,
        required: true,
    },
    cottonLungi: {
        type: Number,
        required: true,
    },
    cottonLungiPrice: {
        type: Number,
        required: true,
    },
    totalLungiPerDay: {
        type: Number,
        required: true,
    },
    totalLungiPricePerDay: {
        type: Number,
        required: true,
    },
    addedOn: {
        type: String,
        required: true,
    },
    currentWeekCount: {
        type: Number,
        required: true,
    }
})

// creating a new collection
const FabricDetails = new mongoose.model("fabric-details", fabricSchema)

module.exports = FabricDetails;