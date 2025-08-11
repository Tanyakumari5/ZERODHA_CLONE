import React, { useState } from "react";
import "../../index.css";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
		setSuccess("");
	};

		const handleSubmit = async (e) => {
			e.preventDefault();
			if (!form.name || !form.email || !form.password || !form.confirmPassword) {
				setError("All fields are required.");
				return;
			}
			if (form.password !== form.confirmPassword) {
				setError("Passwords do not match.");
				return;
			}
			try {
				const res = await fetch("http://localhost:3002/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: form.email,
						password: form.password,
						username: form.name,
					}),
					credentials: "include"
				});
				const data = await res.json();
				if (data.success) {
					setSuccess("Signup successful! You can now log in.");
					setForm({ name: "", email: "", password: "", confirmPassword: "" });
				} else {
					setError(data.message || "Signup failed. Try again.");
				}
			} catch (err) {
				setError("Server error. Please try again later.");
			}
		};

	return (
		<div className="signup-container" style={{ maxWidth: 400, margin: "40px auto", padding: 24, boxShadow: "0 2px 8px #eee", borderRadius: 8, background: "#fff" }}>
			<h2 style={{ textAlign: "center", marginBottom: 24 }}>Create Your Account</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 16 }}>
					<label htmlFor="name" style={{ display: "block", marginBottom: 6 }}>Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={form.name}
						onChange={handleChange}
						style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
						autoComplete="off"
					/>
				</div>
				<div style={{ marginBottom: 16 }}>
					<label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
						autoComplete="off"
					/>
				</div>
				<div style={{ marginBottom: 16 }}>
					<label htmlFor="password" style={{ display: "block", marginBottom: 6 }}>Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
						autoComplete="off"
					/>
				</div>
				<div style={{ marginBottom: 16 }}>
					<label htmlFor="confirmPassword" style={{ display: "block", marginBottom: 6 }}>Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={form.confirmPassword}
						onChange={handleChange}
						style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
						autoComplete="off"
					/>
				</div>
				{error && <div style={{ color: "#d32f2f", marginBottom: 12 }}>{error}</div>}
				{success && <div style={{ color: "#388e3c", marginBottom: 12 }}>{success}</div>}
				<button type="submit" style={{ width: "100%", padding: 10, background: "#1976d2", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold", cursor: "pointer" }}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
