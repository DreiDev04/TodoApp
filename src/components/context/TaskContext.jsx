import { useState, createContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [task, setTask] = useState("today");
  const [todos, setTodos] = useState([]);

  return (
    <TaskContext.Provider value={{ task, setTask, todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
