import React, { useState } from "react";

function Task({ task, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(
    task.description
  );

  const handleEdit = () => {
    if (newDescription.trim() === "") {
      return;
    }

    editTask(task.id, newDescription.trim());
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px auto",
        maxWidth: "500px",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <button onClick={handleEdit} style={{ marginLeft: "10px" }}>
            Save
          </button>

          <button
            onClick={() => {
              setNewDescription(task.description);
              setIsEditing(false);
            }}
            style={{ marginLeft: "5px" }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.isDone ? "line-through" : "none",
              marginRight: "15px",
            }}
          >
            {task.description}
          </span>

          <button onClick={() => toggleTask(task.id)}>
            {task.isDone ? "Mark Undone" : "Mark Done"}
          </button>

          <button
            onClick={() => setIsEditing(true)}
            style={{ marginLeft: "5px" }}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Task;