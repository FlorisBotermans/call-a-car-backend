const { Car } = require('../models/car')
const { CarRide } = require('../models/carRide')

module.exports = {
    createCarRide(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    const newCarRide = new CarRide({
                        startLocationX: req.body.startLocationX,
                        startLocationY: req.body.startLocationY,
                        endLocationX: req.body.endLocationX,
                        endLocationY: req.body.endLocationY,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        seats: req.body.seats,
                        kilometers: req.body.kilometers
                    })

                    req.body.passengers.forEach(element => {
                        newCarRide.passengers.push(element.passenger)
                    })

                    car.carRides.push(newCarRide)
                    car.save()
                        .then(() => {
                            return res.send(newCarRide)
                        })
                }
            })
    },

    getCarRides(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    if (!car.carRides.length) return res.status(404).send({ error: 'this car has no rides' })
                    else return res.send(car.carRides)
                }
            })
    }
}