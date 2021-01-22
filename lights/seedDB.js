const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGOD_URl ||
    "mongodb://localhost/lights"
);
const lightsSeed = [

    {
        place_id:1,
        street_address: "228 Lake Terrace Dr, Henderson, Tennessee 37075",
        lat:36.271402, 
        long: -86593625,
        _date: new Date(Date.now())
    },
    {
        place_id: 2,
        street_address: "1001 Ash Circle, La Vergne, Tennessee 37086",
        lat: 35.983101,
        long:-86.59296,
        _date: new Date(Date.now())
    },
    {
        place_id: 3,
        street_address: "176 Luna Lane, Henderson, Tennessee 37075",
        lat: 35.621448,
        long:-86.574314,
        _date: new Date(Date.now())
    },
    {
        place_id: 4,
        street_address: "1390 Neil RD, Chapple Hill, Tennessee 37034",
        lat: 35.634984,
        long:-86.762865, 
        _date: new Date(Date.now())
    },
    {
        place_id: 5,
        street_address: "8202 Brownstone Ext,Cross Plains, Tennessee 37049",
        lat:  36.542156, 
        long:-86.661792,
        _date: new Date(Date.now())
    },
    {
        place_id: 6,
        street_address: "150 Clearidge Dr, Rockvale,  Tennessee 37153",
        lat: 5.787761, 
        long: -86.494797, 
        _date: new Date(Date.now())
    }
];
db.Lights
    .remove({})
    .then(() => db.Lights.collection.insertMany(lightsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
