const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lightsSchema = new Schema({

 street_address: {type: String, required: "Street address required. "},
 _date: {type: Date, default: Date.now},
 lat:{type: Number},
 long:{type: Number}
});

const Lights = mongoose.model("Lights", lightsSchema);

module.exports = Lights;