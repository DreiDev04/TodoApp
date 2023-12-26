import React, { useEffect } from "react";
import MyCheckbox from "./ownedComponents/MyCheckbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import MainContext from "./context/MainContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function IndividualTask({ todos, index }) {
  // console.log(todos.id);
  // const { setIsAddItem } = useContext(MainContext);

  // function OpenAddItem() {
  //   setIsAddItem(true);
  // }

  const toggleComplete = async (todos) => {
    console.log("clicked");
    await updateDoc(doc(db, "todo", todos.id), {
      completed: !todos.completed,
    });
  };

  return (
    <div className="flex py-2 px-5 items-center border-b border-b-light-3">
      <MyCheckbox
      todos={todos}
        id={todos.id}
        isSelected={todos.completed}
        toggleComplete={() => toggleComplete(todos)}
      >
        {todos.text}{" "}
      </MyCheckbox>

      <button
        className="ml-auto p-2 rounded-lg hover:bg-dark-4"
        type="button"
        // onClick={OpenAddItem}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default IndividualTask;
