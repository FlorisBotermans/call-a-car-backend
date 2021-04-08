const mongoose = require('mongoose')

const carAccidentSchema = new mongoose.Schema({
    driversInvolved: {
        type: Boolean,
        required: true
    },
    locationX: {
        type: Number,
        min: -180,
        max: 180,
        required: true
    },
    locationY: {
        type: Number,
        min: -90,
        max: 90,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    weekNumber: {
        type: Number,
        required: true
    }
})

const CarAccident = mongoose.model('carAccident', carAccidentSchema)

module.exports.CarAccident = CarAccident
module.exports.carAccidentSchema = carAccidentSchema