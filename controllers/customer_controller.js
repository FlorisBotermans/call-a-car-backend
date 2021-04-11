const { Customer } = require('../models/customer')

module.exports = {
    createCustomer(req, res) {
        const newCustomer = new Customer({
            googleId: req.body.googleId,
            name: req.body.name,
            addressLocationX: req.body.addressLocationX,
            addressLocationY: req.body.addressLocationY,
            city: req.body.city,
            privacyPermission: req.body.privacyPermission,
            regular: req.body.regular
        })

        Customer.create(newCustomer)
            .then((newCustomer) => {
                return res.send(newCustomer)
            })
    },

    getCustomers(req, res) {
        Customer.find()
            .then((customers) => {
                if (!customers.length) return res.status(404).send({ error: 'there are no customers'})
                else return res.send(customers)
            })
    },

    getCustomerById(req, res) {
        Customer.findById({ _id: req.params.customerid })
            .then((customer) => {
                if (!customer) return res.status(404).send({ error: 'customer with this id does not exist' })
                else return res.send(customer)
            })
    },

    getCustomerByGoogleId(req,res) {
        Customer.findOne({googleId: req.params.gid}).then((customer) =>{
            if (!customer) return res.status(404).send({ error: 'customer with this id does not exist' })
            else return res.send(customer).end()
        })
    }
}