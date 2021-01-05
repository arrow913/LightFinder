const router = require("express").Router();
const lightsController = require("../../controllers/lightsController");

router.route("/")
  .get(lightsController.findAll)
  .post(lightsController.create);

router
  .route("/:id")
  .get(lightsController.findById)
  .put(lightsController.update)
  

module.exports = router;
