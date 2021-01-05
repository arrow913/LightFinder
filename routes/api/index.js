const router = require("express").Router();
const lightsRoutes = require("./lights");

// Book routes
router.use("/lights", lightRoutes);

module.exports = router;
