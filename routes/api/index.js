const router = require("express").Router();
const lightsRoutes = require("./lights");

router.use("/lights", lightsRoutes);

module.exports = router;
