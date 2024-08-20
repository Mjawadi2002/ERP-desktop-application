const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailySchema = new Schema({
    express_quantity: {
        type: Number,
        required: true
    },
    capucin_quantity: {
        type: Number,
        required: true
    },
    direct_quantity: {
        type: Number,
        required: true
    },
    jus_quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Daily', dailySchema);
