import { useState, createContext } from "react";

const TaskCollectionContext = createContext();
export default TaskCollectionContext;

export function TaskCollectionProvider({ children }) {
  const [taskText, setTaskText] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  return (
    <TaskCollectionContext.Provider
      value={{
        taskText,
        setTaskText,
        taskDescription,
        setTaskDescription,
        taskCategory,
        setTaskCategory,
        taskDate,
        setTaskDate,
        taskTime,
        setTaskTime,
      }}
    >
      {children}
    </TaskCollectionContext.Provider>
  );
}
