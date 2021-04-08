const { Car } = require('../models/car')
const { ParkingReservation } = require('../models/parkingReservation')

module.exports = {
    createParkingReservation(req, res) {  
        Car.findById({ _id: req.params.carid })  
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    const newParkingReservation = new ParkingReservation({
                        licensePlate: car._id,
                        price: req.body.price
                    })

                    ParkingReservation.create(newParkingReservation)
                        .then((newParkingReservation) => {
                            return res.send(newParkingReservation)
                        })
                }
            })
    },

    getParkingReservations(req, res) {
        ParkingReservation.find()
            .then((parkingReservations) => {
                if (!parkingReservations.length) return res.status(404).send({ error: 'there are no parking reservations' })
                else return res.send(parkingReservations)
            })
    }
}