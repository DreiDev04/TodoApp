import React, { useEffect } from "react";
import MyCheckbox from "./ownedComponents/MyCheckbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function IndividualTask({ todos, index }) {
  const toggleComplete = async (todos) => {
    console.log("clicked");
    await updateDoc(doc(db, "todo", todos.id), {
      completed: !todos.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo", id), {
      deleted: true,
    });
  }
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

      <div className="ml-auto ">
        <button className="mx-2 hover:bg-dark-4 px-2 py-1 rounded-lg" onClick={()=>{handleDelete(todos.id)}}>
          <FontAwesomeIcon icon={faTrash} className="text-red-500" />
        </button>
        <button
          className="ml-auto px-2 py-1 rounded-lg hover:bg-dark-4"
          type="button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default IndividualTask;
