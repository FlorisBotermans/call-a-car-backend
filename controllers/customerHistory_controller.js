const { CustomerHistory } = require('../models/customerHistory')
const { Customer } = require('../models/customer')

module.exports = {
    createCustomerHistory(req, res) {    
        Customer.findById({ _id: req.params.customerid })
            .then((customer) => {
                if (!customer) return res.status(404).send({ error: 'customer with this id does not exist' })
                else {
                    const newCustomerHistory = new CustomerHistory({
                        licensePlate: req.body.licensePlate,
                        fromLocationX: req.body.fromLocationX,
                        fromLocationY: req.body.fromLocationY,
                        toLocationX: req.body.toLocationX,
                        toLocationY: req.body.toLocationY,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        kilometers: req.body.kilometers,
                        cost: req.body.cost,
                        customer: customer._id
                    })

                    CustomerHistory.create(newCustomerHistory)
                        .then((newCustomerHistory) => {
                            customer.customerHistories.push(newCustomerHistory._id)
                            customer.save()
                                .then(() => {
                                    return res.send(newCustomerHistory)
                                })
                        })
                }
            })
    },
    
    getCustomerHistories(req, res) {
        CustomerHistory.find()
            .then((customerHistories) => {
                if (!customerHistories.length) return res.status(404).send({ error: 'there are no customer histories' })
                else return res.send(customerHistories)
            })
    }
}