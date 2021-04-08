const { Car } = require('../models/car')
const { CarRide } = require('../models/carRide')

module.exports = {
    createCarRide(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if(!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    const carRide = new CarRide({
                        licensePlate: req.body.licensePlate,
                        startLocationX: req.body.startLocationX,
                        startLocationY: req.body.startLocationY,
                        endLocationX: req.body.endLocationX,
                        endLocationY: req.body.endLocationY,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        seats: req.body.seats,
                        kilometers: req.body.kilometers
                    })

                    car.carRides.push(carRide)
                    car.save()
                        .then(() => {
                            return res.send(carRide)
                        })
                }
            })
    },

    getCarRides(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if(!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    if(!car.carRides.length) return res.status(404).send({ error: 'this car has no rides' })
                    else return res.send(car.carRides)
                }
            })
    }
}