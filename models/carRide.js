const mongoose = require('mongoose')

const carRideSchema = new mongoose.Schema({
    startLocationX: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    },
    startLocationY: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    endLocationX: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    },
    endLocationY: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    kilometers: {
        type: Number,
        required: true
    },
    passengers: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'customer' 
    }]
})

const CarRide = mongoose.model('carRide', carRideSchema)

module.exports.CarRide = CarRide
module.exports.carRideSchema = carRideSchema