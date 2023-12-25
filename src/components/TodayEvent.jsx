import React, {useEffect, useState} from "react";
import IndividualTask from "./IndividualTask";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";


function TodayEvent({ todayTextSize, todayNum, title}) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {

    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksArr = [];
      querySnapshot.forEach((doc) => {
        tasksArr.push({...doc.data(), id: doc.id});
      });
      // console.log(tasksArr);
      setTodos(tasksArr);
    });
    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <div className="container p-4 text-light-1 font-OpenSans">
      <h1 className={`font-bold text-${todayTextSize} mb-4`}>
        {title}
        {todayNum ? (<span className={`px-3 py-1 m-3 border border-light-3 rounded-lg text-${todayTextSize}`}>
          0
        </span>):("") }
        
      </h1>
      <button className="flex p-3 w-full border border-light-3 rounded-lg hover:bg-tertiary-1">
        + Add New Task
      </button>
      <IndividualTask todos={todos} />
      {/* <IndividualTask todos={todos} /> */}

    </div>
  );
}

export default TodayEvent;
