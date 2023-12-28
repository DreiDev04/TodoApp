import { useState, createContext, useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [task, setTask] = useState("today");
  const [todos, setTodos] = useState([]);
  const [todoTask, setTodoTask] = useState([]);

  const fetchData = async () => {
    console.log("data has been fetched");
    const q = query(collection(db, "todo"));
    const querySnapshot = await getDocs(q);

    const tasksArr = [];
    querySnapshot.forEach((doc) => {
      tasksArr.push({ ...doc.data(), id: doc.id });
    });

    setTodos(tasksArr);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const contextValue = { task, setTask, todos, setTodos, fetchData, todoTask, setTodoTask};

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
