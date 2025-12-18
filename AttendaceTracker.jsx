import { useState } from "react";

function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", status: "" },
    { id: 2, name: "Bob Smith", status: "" },
    { id: 3, name: "Charlie Brown", status: "" },
    { id: 4, name: "Diana Prince", status: "" },
  ]);

  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  /* Inline Styles */
  const pageStyle = {
    minHeight: "100vh",
    width:"200vh",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    backgroundColor: "#fff",
    padding: "25px",
    width: "450px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    padding: "8px",
    borderBottom: "1px solid #eee",
  };

  const presentBtn = {
    padding: "6px 12px",
    marginRight: "8px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const absentBtn = {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const statusStyle = (status) => ({
    fontWeight: "bold",
    color:
      status === "Present"
        ? "#28a745"
        : status === "Absent"
        ? "#dc3545"
        : "#999",
  });

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center" }}>📋 Attendance Tracker</h2>

        {students.map((student) => (
          <div key={student.id} style={rowStyle}>
            <span>{student.name}</span>

            <div>
              <button
                style={presentBtn}
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>
              <button
                style={absentBtn}
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>
            </div>

            <span style={statusStyle(student.status)}>
              {student.status || "Not Marked"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceTracker;
