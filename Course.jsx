import { useState } from "react";

function CourseEnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    level: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the terms & conditions");
      return;
    }
    setSubmitted(true);
  };

  /* Inline Styles */
  const pageStyle = {
    minHeight: "100vh",
    width:"200vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",X
  };

  const formContainer = {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    padding: "30px",
    borderRadius: "12px",
    width: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const labelStyle = {
    fontWeight: "600",
    display: "block",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={formContainer}>
        <h2 style={headingStyle}>Course Enrollment</h2>

        {submitted ? (
          <p style={{ color: "green", textAlign: "center" }}>
            🎉 Enrollment Successful!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label style={labelStyle}>Course</label>
            <select
              name="course"
              style={inputStyle}
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
              <option value="python">Python</option>
            </select>

            <label style={labelStyle}>Level</label>
            <div style={{ marginBottom: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="beginner"
                  onChange={handleChange}
                  required
                />{" "}
                Beginner
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="level"
                  value="advanced"
                  onChange={handleChange}
                />{" "}
                Advanced
              </label>
            </div>

            <label style={{ marginBottom: "15px", display: "block" }}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />{" "}
              I agree to the terms & conditions
            </label>

            <button type="submit" style={buttonStyle}>
              Enroll Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CourseEnrollmentForm;
