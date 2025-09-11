const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: [true, "Your mobile number is required"],
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Validate 10-digit mobile number
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  email: {
    type: String,
    unique: true,
    sparse: true // Allows multiple users to have no email (optional field)
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  isVerified: {
    type: Boolean,
    default: false // Track if mobile number is verified via OTP
  }
});

// Hash password only if it exists (e.g., added later)
userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);