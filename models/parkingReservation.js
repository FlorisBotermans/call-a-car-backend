const mongoose = require('mongoose')

const parkingReservationSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

const ParkingReservation = mongoose.model('parkingReservation', parkingReservationSchema)

module.exports.ParkingReservation = ParkingReservation