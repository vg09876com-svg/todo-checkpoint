import React, { useState } from "react";

function Addtask({ addTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      return;
    }

    addTask(description.trim());
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Add Task
      </button>
    </form>
  );
}

export default Addtask;