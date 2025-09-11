// import React, { useState } from "react";

// const OtpVerification = ({ mobileNumber }) => {
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3002/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ mobileNumber, otp }),
//       });
//       const data = await res.json();
//       setMessage(data.message);
//     } catch {
//       setMessage("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
//       <h2 style={{ textAlign: "center" }}>Verify OTP</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           placeholder="Enter OTP"
//           style={{ width: "100%", padding: 8, marginBottom: 16 }}
//         />
//         <button type="submit" style={{ width: "100%", padding: 10, background: "#1976d2", color: "#fff", border: "none", borderRadius: 4 }}>
//           Verify
//         </button>
//       </form>
//       {message && <div style={{ marginTop: 16, textAlign: "center" }}>{message}</div>}
//     </div>
//   );
// };

// export default OtpVerification;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

const OtpVerification = ({ mobileNumber }) => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // <-- Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3002/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);

        // ✅ Redirect to dashboard after successful verification
        
      window.location.href = "http://localhost:3001/dashboard";
      } else {
        setMessage(data.message || "Invalid OTP");
      }
    } catch {
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          style={{ width: "100%", padding: 8, marginBottom: 16 }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: 10, background: "#1976d2", color: "#fff", border: "none", borderRadius: 4 }}
        >
          Verify
        </button>
      </form>
      {message && <div style={{ marginTop: 16, textAlign: "center" }}>{message}</div>}
    </div>
  );
};

export default OtpVerification;
