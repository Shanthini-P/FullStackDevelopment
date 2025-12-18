import { useState } from "react";

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput }]);
    setTaskInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /* Inline Styles */
  const pageStyle = {
    minHeight: "100vh",
    width:"200vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    backgroundColor: "#ffffff",
    padding: "25px",
    width: "400px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  };

  const inputStyle = {
    width: "72%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginRight: "6px",
  };

  const addButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const taskRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #eee",
  };

  const deleteButtonStyle = {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "4px 8px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <div style={containerStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
            📝 Task Dashboard
          </h2>

          <div style={{ marginBottom: "15px", display: "flex" }}>
            <input
              type="text"
              placeholder="Enter a new task..."
              style={inputStyle}
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button style={addButtonStyle} onClick={addTask}>
              Add
            </button>
          </div>

          {tasks.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777" }}>
              No tasks added yet
            </p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} style={taskRowStyle}>
                <span>{task.text}</span>
                <button
                  style={deleteButtonStyle}
                  onClick={() => removeTask(task.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
