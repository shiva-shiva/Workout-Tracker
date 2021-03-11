const mongoose = require('mongodb');

const Schema = mongoose.Schema;


const ExersiceSchema = new Schema({
    type: String,
    name: String,
    distance:Number,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
})

const Exersice = mongoose.model("Exersice", ExersiceSchema);
module.exports = Exersice;