const { Car } = require('../models/car')
const { CarAccident } = require('../models/carAccident')

module.exports = {
    createCarAccident(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    const newCarAccident = new CarAccident({
                        driversInvolved: req.body.driversInvolved,
                        locationX: req.body.locationX,
                        locationY: req.body.locationY,
                        when: req.body.when,
                        weekNumber: req.body.weekNumber
                    })

                    car.carAccidents.push(newCarAccident)
                    car.save()
                        .then(() => {
                            return res.send(newCarAccident)
                        })
                }
            })
    },

    getCarAccidents(req, res) {
        Car.findById({ _id: req.params.carid })
            .then((car) => {
                if (!car) return res.status(404).send({ error: 'car with this id does not exist' })
                else {
                    if (!car.carAccidents.length) return res.status(404).send({ error: 'this car has no accidents' })
                    else return res.send(car.carAccidents)
                }
            })
    }
}