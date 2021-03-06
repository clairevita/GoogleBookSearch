const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

router
  .get(bookController.findById)
  .delete(bookController.remove);

module.exports = router;
