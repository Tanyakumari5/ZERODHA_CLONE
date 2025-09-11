import React, { useState } from "react";
import OtpVerification from "./OtpVerification";
import "../../index.css";

const Signup = () => {
  const [form, setForm] = useState({ mobileNumber: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.mobileNumber) {
      setError("Mobile Number is required.");
      return;
    }
    if (!/^\d{10}$/.test(form.mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    try {
      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: form.mobileNumber }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Signup initiated! Please check for OTP.");
        setShowOtp(true);
      } else {
        setError(data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #eee" }}>
      {!showOtp ? (
        <>
          <h2 style={{ textAlign: "center", fontWeight: 600, fontSize: 28, marginBottom: 16 }}>Signup now</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 24 }}>Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
              <span style={{ padding: "8px 12px", background: "#f5f5f5", border: "1px solid #ccc", borderRadius: "6px 0 0 6px", fontWeight: 500 }}>+91</span>
              <input
                type="text"
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                style={{ flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: "0 6px 6px 0", outline: "none" }}
                maxLength={10}
                autoComplete="off"
              />
            </div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 18, textAlign: "center" }}>
              You will receive an OTP on your number
            </div>
            {error && <div style={{ color: "#d32f2f", marginBottom: 12, textAlign: "center" }}>{error}</div>}
            {success && <div style={{ color: "#388e3c", marginBottom: 12, textAlign: "center" }}>{success}</div>}
            <button type="submit" style={{ width: "100%", padding: "12px 0", background: "#1976d2", color: "#fff", border: "none", borderRadius: 6, fontWeight: "bold", fontSize: 16, cursor: "pointer", marginBottom: 16 }}>
              Continue
            </button>
          </form>
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <a href="#" style={{ color: "#1976d2", textDecoration: "none", fontSize: 15 }}>Want to open an NRI account?</a>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "center" }}>
            By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account as per SEBI and PMLA guidelines. To learn about the details we collect when you sign up with Zerodha, visit our support article.<br /><br />
            If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
          </div>
        </>
      ) : (
        <OtpVerification mobileNumber={form.mobileNumber} />
      )}
    </div>
  );
}
export default Signup;