const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth_middleware");
const userController = require("../controllers/user_controller");

router.post("/feature", auth, userController.createFeature);
router.get("/features", auth, userController.getMyFeatures);

module.exports = router;
