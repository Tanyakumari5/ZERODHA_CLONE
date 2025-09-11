// backend/util/sendOtp.js
// Example: Send OTP using Twilio

const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

/**
 * Send OTP SMS to a mobile number
 * @param {string} mobileNumber - 10 digit mobile number
 * @param {string} otp - OTP code
 * @returns {Promise}
 */
function sendOtp(mobileNumber, otp) {
  return client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
    to: `+91${mobileNumber}`
  });
}

module.exports = sendOtp;
