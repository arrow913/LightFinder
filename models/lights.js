const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 place_id: {type: [], required: true},
 street_address: {type: stringify, required: true}
 
});

const lights = mongoose.model("Lights", lightsSchema);

module.exports = Lights;