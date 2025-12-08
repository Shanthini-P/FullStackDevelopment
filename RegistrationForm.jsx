import React, { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  // INTERNAL CSS
  const styles = {
    container: {
      width: "360px",
      margin: "20px auto",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "10px",
      fontFamily: "Arial",
      background: "#f9f9f9",
    },
    h2: {
      textAlign: "center",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginTop: "10px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      borderRadius: "5px",
      border: "1px solid #aaa",
    },
    radioGroup: {
      marginTop: "5px",
    },
    select: {
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      borderRadius: "5px",
    },
    button: {
      marginTop: "20px",
      width: "100%",
      padding: "10px",
      background: "green",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    success: {
      marginTop: "15px",
      padding: "10px",
      background: "#d4ffd4",
      border: "1px solid green",
      color: "green",
      borderRadius: "5px",
      textAlign: "center",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Patient Registration Form</h2>

      {submitted && <div style={styles.success}>Registration Successful!</div>}

      <form onSubmit={handleSubmit}>
        
        <label style={styles.label}>Patient Name:</label>
        <input type="text" style={styles.input} required />

        <label style={styles.label}>Age:</label>
        <input type="number" style={styles.input} min="1" max="120" required />

        <label style={styles.label}>Gender:</label>
        <div style={styles.radioGroup}>
          <input type="radio" name="gender" value="Male" /> Male &nbsp;
          <input type="radio" name="gender" value="Female" /> Female
        </div>

        <label style={styles.label}>Symptoms:</label>
        <div>
          <input type="checkbox" /> Fever &nbsp;
          <input type="checkbox" /> Cough &nbsp;
          <input type="checkbox" /> Headache
        </div>

        <label style={styles.label}>Upload Report:</label>
        <input type="file" style={styles.input} />

        <label style={styles.label}>Department:</label>
        <select style={styles.select}>
          <option>General Medicine</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Pediatrics</option>
        </select>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default App;
