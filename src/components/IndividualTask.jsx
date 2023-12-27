import MyCheckbox from "./ownedComponents/MyCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import TaskContext from "./context/TaskContext";
import { useContext } from "react";
import TaskPreview from "./TaskPreview";

function IndividualTask({ todos }) {
  console.log(todos);
  const { fetchData } = useContext(TaskContext);

  const toggleComplete = async (todos) => {
    await updateDoc(doc(db, "todo", todos.id), {
      completed: !todos.completed,
    });
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo", id), {
      deleted: true,
    });
    fetchData();
  };
  return (
    <div
      className={`py-2 px-5 items-center border-b border-b-light-3 ${
        todos.completed ? "text-light-4" : ""
      } text-lg text-transform: capitalize`}
    >
      <div className="flex">
        <div >
          <MyCheckbox
            todos={todos}
            id={todos.id}
            isSelected={todos.completed}
            toggleComplete={() => toggleComplete(todos)}
            className="flex items-center "
          >
            {todos.text}
          </MyCheckbox>
          <TaskPreview todos={todos} />
        </div>

        <div className="ml-auto">
          <button
            className="mx-2 hover:bg-dark-4 px-2 py-1 rounded-lg"
            onClick={() => {
              handleDelete(todos.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="text-red-500" />
          </button>
          <button
            className="ml-auto px-2 py-1 rounded-lg hover:bg-dark-4"
            type="button"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-light-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualTask;
