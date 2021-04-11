const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    googleId:{
        type:String,
        required:true
    },
    addressLocationX: {
        type: Number,
        min:-180,
        max:180,
        required: true
    },
    addressLocationY: {
        type: Number,
        min:-90,
        max:90,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    privacyPermission: {
        type: Boolean,
        required: true,
    },
    regular: {
        type: Boolean,
        default: false,
        required: true
    },
    customerHistories: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'customerHistory' 
    }]
})

const Customer = mongoose.model('customer', customerSchema)

module.exports.Customer = Customer