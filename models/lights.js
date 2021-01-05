const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lightsSchema = new Schema({
 place_id: {type: Number, required: "Place id required. "},
 street_address: {type: String, required: "Street address required. "}
 
});

const Lights = mongoose.model("Lights", lightsSchema);

module.exports = Lights;