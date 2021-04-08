const mongoose = require('mongoose')

const customerHistorySchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true
    },
    fromLocationX: {
        type: Number,
        min:-180,
        max:180,
        required: true
    },
    fromLocationY: {
        type: Number,
        min:-90,
        max:90,
        required: true
    },
    toLocationX: {
        type: String,
        min:-180,
        max:180,
        required: true,
    },
    toLocationY: {
        type: Number,
        min:-90,
        max:90,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    kilometers: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'customer' 
    },
})

const CustomerHistory = mongoose.model('customerHistory', customerHistorySchema)

module.exports.CustomerHistory = CustomerHistory