const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODDB_URI ||
    "mongodb://localhost/"
);
const lightsSeed = [

    {
        place_id: "[0]",
        street_address: "228 Lake Terrace Dr, Henderson, Tennessee 37075"
    },
    {
        place_id: "[1]",
        street_address: "1001 Ash Circle, La Vegne, Tennessee 37127"
    },
    {
        place_id: "[2]",
        street_address: "176 Luna Lane, Henderson, Tennessee 37075"
    },
    {
        place_id: "[3]",
        street_address: "1390 Neil RD, Chapple Hill, Tennessee "
    },
    {
        place_id: "[4]",
        street_address: "8202 Brownstone Ext,Cross Plains, Tennessee 37049"
    },
    {
        place_id: "[5]",
        street_address: "150 Clearidge Dr, Rockvale,  Tennessee 37153"
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
