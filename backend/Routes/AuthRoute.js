const { Signup } = require("../Controllers/AuthController");
const { verifyOtp } = require("../Controllers/OtpController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/verify-otp", verifyOtp);

module.exports = router;