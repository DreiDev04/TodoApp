import React, { useEffect, useState, useContext} from "react";
import IndividualTask from "./IndividualTask";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import MainContext from "./context/MainContext";
import TaskContext from "./context/TaskContext"


function TodayEvent({ todayTextSize, todayNum, title }) {
  
  const {todos, setTodos} = useContext(TaskContext);
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksArr = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id });
      });
      // console.log(tasksArr);
      // setTodosLength(tasksArr);
      setTodos(tasksArr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const { setIsAddItem } = useContext(MainContext);

  function OpenAddItem() {
    setIsAddItem(true);
  }

  return (
    <div className="container p-4 text-light-1 font-OpenSans">
      <h1 className={`font-bold text-${todayTextSize} mb-4`}>
        {title}
        {todayNum ? (
          <span
            className={`px-3 py-1 m-3 border border-light-3 rounded-lg text-${todayTextSize}`}
          >
            {todos.length }
          </span>
        ) : (
          ""
        )}
      </h1>
      <button
        className="flex p-3 w-full border border-light-3 rounded-lg hover:bg-tertiary-1 "
        onClick={OpenAddItem}
      >
        + Add New Task
      </button>
      {todos.map((todos, index) => {
        // console.log(todos);
        return <IndividualTask todos={todos} key={todos.id} index={index} />;
      })}
    </div>
  );
}

export default TodayEvent;
