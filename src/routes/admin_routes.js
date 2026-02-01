const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth_middleware");
const role = require("../middleware/role_middleware");
const adminController = require("../controllers/admin_controller");

router.get("/features", auth, role("ADMIN"), adminController.getAllFeatures);

module.exports = router;
