const { Car, validate } = require('../models/car')

module.exports = {
    createCar(req, res) {
        const newCar = new Car({
            _id: req.body._id,
            power: req.body.power,
            maxPower: req.body.maxPower,
            brand: req.body.brand,
            consumption: req.body.consumption,
            amountOfSeats: req.body.amountOfSeats,
            currentLocationX: req.body.currentLocationX,
            currentLocationY: req.body.currentLocationY,
            wheelchairAccessibility: req.body.wheelchairAccessibility,
            type: req.body.type
        })

        Car.findById({ _id: req.body._id })
            .then((car) => {
                if (car) return res.status(404).send({ error: 'car with this id already exists' })
                else {
                    Car.create(newCar)
                        .then((newCar) => {
                            return res.send(newCar)
                        })
                }
            })
    },

    getCars(req, res) {
        Car.find()
            .then((cars) => {
                if (!cars.length) return res.status(404).send({ error: 'there are no cars' })
                else return res.send(cars)
            })
    },

    getCarById(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else return res.send(car)
            })
    }
}