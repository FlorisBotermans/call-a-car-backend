const mongoose = require('mongoose')
const { carAccidentSchema } = require('./carAccident')
const { carRideSchema } = require('./carRide')

const carSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true
    },
    power: {
        type: Number,
        required: true
    },
    maxPower: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        enum: ['Ford', 'Renault', 'Audi'],
        required: true
    },
    consumption: {
        type: Number,
        required: true
    },
    amountOfSeats: {
        type: Number,
        required: true
    },
    currentLocationX: {
        type: Number,
        min:-180,
        max:180,
        required: true
    },
    currentLocationY: {
        type: Number,
        min:-90,
        max:90,
        required: true
    },
    wheelchairAccessibility: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        enum: ['passengerCar', 'bus', 'miniVan'],
        required: true
    },
    carAccidents: [carAccidentSchema],
    carRides: [carRideSchema]
})

const Car = mongoose.model('car', carSchema)

module.exports.Car = Car