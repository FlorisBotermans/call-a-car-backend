const { Car, validate } = require('../models/car')

module.exports = {
    createCar(req, res) {
        const car = new Car({
            licensePlate: req.body.licensePlate,
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

        Car.create(car)
            .then((car) => {
                return res.send(car)
            })
    },

    getCars(req, res) {
        Car.find()
            .then((cars) => {
                if (!cars) return res.status(404).send({ error: 'there are no cars' })
                else return res.send(cars)
            })
    },

    getCarById(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist'})
                else return res.send(car)
            })
    }
}