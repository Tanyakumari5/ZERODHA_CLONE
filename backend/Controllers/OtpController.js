// backend/Controllers/OtpController.js
const mongoose = require("mongoose");
const User = require("../model/UserModel");

// Use the same OTP schema as in AuthController
const otpSchema = new mongoose.Schema({
  mobileNumber: String,
  otp: String,
  expiresAt: Date
});
const OtpModel = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

module.exports.verifyOtp = async (req, res) => {
  try {
    const { mobileNumber, otp } = req.body;
    if (!mobileNumber || !otp) {
      return res.status(400).json({ message: "Mobile number and OTP required", success: false });
    }
    // Find OTP record
    const otpRecord = await OtpModel.findOne({ mobileNumber, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: "Invalid OTP", success: false });
    }
    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired", success: false });
    }
    // Mark user as verified
    await User.updateOne({ mobileNumber }, { isVerified: true });
    // Delete OTP record after verification
    await OtpModel.deleteOne({ _id: otpRecord._id });
    res.status(200).json({ message: "OTP verified successfully!", success: true });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ message: "Server error. Please try again later.", success: false });
  }
};
