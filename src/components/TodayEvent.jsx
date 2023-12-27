import { useContext } from "react";
import IndividualTask from "./IndividualTask";

import MainContext from "./context/MainContext";
import TaskContext from "./context/TaskContext";

function TodayEvent({ todayTextSize, todayNum, title }) {
  const { todos } = useContext(TaskContext);
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
            {todos.length}
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
