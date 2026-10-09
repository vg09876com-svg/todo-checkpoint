import React from "react";
import Task from "./Task";

function ListTask({ tasks, toggleTask, editTask }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default ListTask;