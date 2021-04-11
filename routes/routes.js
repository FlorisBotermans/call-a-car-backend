const CustomerController = require('../controllers/customer_controller')
const CustomerHistoryController = require('../controllers/customerHistory_controller')
const CarController = require('../controllers/car_controller')
const CarAccidentController = require('../controllers/carAccident_controller')
const CarRideController = require('../controllers/carRide_controller')
const ParkingReservationController = require('../controllers/parkingReservation_controller')

module.exports = (app) => {
    app.post('/api/customer', CustomerController.createCustomer)
    app.get('/api/customer', CustomerController.getCustomers)
    app.get('/api/customer/:customerid', CustomerController.getCustomerById)
    app.get('/api/customer/google', CustomerController.getCustomerByGoogleId)

    app.post('/api/customer/:customerid/customerHistory', CustomerHistoryController.createCustomerHistory)
    app.get('/api/customer/:customerid/customerHistory', CustomerHistoryController.getCustomerHistories)

    app.post('/api/car', CarController.createCar)
    app.get('/api/car', CarController.getCars)
    app.get('/api/car/:carid', CarController.getCarById)

    app.post('/api/car/:carid/carAccident', CarAccidentController.createCarAccident)
    app.get('/api/car/:carid/carAccident', CarAccidentController.getCarAccidents)

    app.post('/api/car/:carid/carRide', CarRideController.createCarRide)
    app.get('/api/car/:carid/carRide', CarRideController.getCarRides)

    app.post('/api/car/:carid/parkingReservation', ParkingReservationController.createParkingReservation)
    app.get('/api/car/:carid/parkingReservation', ParkingReservationController.getParkingReservations)
}