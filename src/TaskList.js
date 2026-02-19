import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    "Complete React Assignment",
    "Study for Exam"
  ]);

  const [newTask, setNewTask] = useState("");

  // Handle Input Change
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add Task
  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Delete Task
  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (task, index) => index !== indexToDelete
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Tasks</h2>

      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Enter new task"
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
