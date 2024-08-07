const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    express_quantity: {
        type: Number
    },
    capucin_quantity: {
        type: Number
    },
    direct_quantity: {
        type: Number
    },
    jus_quantity: {
        type: Number
    }
}, { timestamps: true }); 

module.exports = mongoose.model('daily', dailySchema);
