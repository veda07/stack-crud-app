const mongoose = require('mongoose');

const sushiSchema = new mongoose.Schema({
name: {type: String, required: true},
fish: String,
isRaw: Boolean
});

const Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi; 