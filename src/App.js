import React, { useState } from "react";
import Addtask from "./Addtask";
import ListTask from "./ListTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Learn React",
      isDone: false,
    },
    {
      id: 2,
      description: "Practice JavaScript",
      isDone: true,
    },
  ]);

  const [filter, setFilter] = useState("all");

  // Add a new task
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  };

  // Mark a task as done or not done
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isDone: !task.isDone }
          : task
      )
    );
  };

  // Edit a task's description
  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, description: newDescription }
          : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") {
      return task.isDone;
    }

    if (filter === "notDone") {
      return !task.isDone;
    }

    return true;
  });

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>My Todo App</h1>

      <Addtask addTask={addTask} />

      <div style={{ margin: "20px" }}>
        <label htmlFor="taskFilter">Filter tasks: </label>

        <select
          id="taskFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="done">Completed Tasks</option>
          <option value="notDone">Uncompleted Tasks</option>
        </select>
      </div>

      <ListTask
        tasks={filteredTasks}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;