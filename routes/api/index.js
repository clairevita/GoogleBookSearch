const router = require("express").Router();
const bookRoutes = require("./posts");

// Post routes
router.use("/books", bookRoutes);

module.exports = router;