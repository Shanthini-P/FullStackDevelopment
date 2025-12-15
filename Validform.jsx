import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
    }
  };

  /* ===== Inline Styles ===== */
  const pageStyle = {
    minHeight: "100vh",
    width:"200vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainer = {
    width: "320px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <div style={formContainer}>
        <h2 style={{ textAlign: "center" }}>Validation Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            style={inputStyle}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={errorStyle}>{errors.name}</p>

          <input
            type="text"
            placeholder="Enter Email"
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={errorStyle}>{errors.email}</p>

          <input
            type="text"
            placeholder="Enter Phone"
            style={inputStyle}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p style={errorStyle}>{errors.phone}</p>

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={errorStyle}>{errors.password}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <p style={errorStyle}>{errors.confirmPass}</p>

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
