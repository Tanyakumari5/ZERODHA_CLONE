const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// OTP Schema for storing OTPs
const otpSchema = new mongoose.Schema({
  mobileNumber: String,
  otp: String,
  expiresAt: Date
});
const OtpModel = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

module.exports.Signup = async (req, res, next) => {
  try {
    const { mobileNumber } = req.body;
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      return res.status(400).json({ message: "Valid mobile number required", success: false });
    }
    const existingUser = await User.findOne({ mobileNumber });
    if (existingUser) {
      return res.status(400).json({ message: "Mobile number already registered", success: false });
    }
    const user = await User.create({ mobileNumber });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Simulate sending OTP: log to console and return in response for demo
    console.log(`Simulated OTP for ${mobileNumber}: ${otp}`);
    // Store OTP in DB with 5 min expiry
    await OtpModel.create({
      mobileNumber,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000)
    });

    res.status(201).json({ message: "Signup initiated! OTP generated.", success: true, otp });
    next();
  } catch (error) {
    console.error("Signup error:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message, success: false });
    }
    res.status(500).json({ message: "Server error. Please try again later.", success: false, error: error.message });
  }
};