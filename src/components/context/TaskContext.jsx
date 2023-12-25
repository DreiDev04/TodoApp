import { useState, createContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [task, setTask] = useState("today");

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
