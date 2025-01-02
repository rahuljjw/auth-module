const express = require("express");
const { registerUser, loginUser, protectedRoute } = require("../controllers/authController");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/protected", verifyToken, protectedRoute);

module.exports = router;
