import React, { useContext } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TaskInput from "../components/flowbite/TaskInput";
import TaskTextArea from "./flowbite/TaskTextArea";
import AddItemSelect from "./flowbite/AddItemSelect";
import DatetimePicker from "./ownedComponents/DatetimePicker";
import TaskCollectionContext from "./context/TaskCollectionContext";

function EditItem({ todoTask }) {
  const todosTask = {
    id: todoTask.id,
    text: todoTask.text,
    description: todoTask.description,
    category: todoTask.category,
    dateAndTime: todoTask.dateAndTime,
  };

  const { fetchData, setTaskText, setTaskDescription, setTaskCategory, setTaskDateAndTime } =
    useContext(TaskCollectionContext);

  const closeAddItem = () => {
    // Handle closing the edit form if needed
  };

  const editTodo = async (e) => {
    e.preventDefault();
    if (!todosTask.text) {
      alert("Please enter a task name");
      return;
    }
    if (!todosTask.dateAndTime) {
      alert("Please enter a date and time");
      return;
    }

    const todoRef = doc(db, "todo", todosTask.id);

    try {
      await updateDoc(todoRef, {
        text: todosTask.text,
        description: todosTask.description,
        category: todosTask.category,
        dateAndTime: todosTask.dateAndTime,
      });

      closeAddItem();
      fetchData();
    } catch (error) {
      console.error("Error updating document: ", error);
      // Handle error appropriately, e.g., show a user-friendly message
    }
  };

  return (
    <>
      <div className="container p-5 text-light-1 font-OpenSans rounded-lg bg-dark-2 h-screen font-bold flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-3">
            <h1 className="text-lg">Tasks:</h1>
            <button
              className="hover:bg-dark-4 rounded px-2"
              type="button"
              onClick={closeAddItem}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="container">
            <TaskInput
              placeholder={"Add New Task"}
              value={todosTask.text}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <TaskTextArea
              placeholder={"Add Description"}
              value={todosTask.description}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div className="container">
            <AddItemSelect
              value={todosTask.category}
              onChange={(e) => setTaskCategory(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <h1 className="my-auto text-lg font-semibold">Due: </h1>
            <DatetimePicker
              value={todosTask.dateAndTime}
              edit={true}
              onChange={(value) => setTaskDateAndTime(value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          <button
            className="bg-dark-2 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-xs"
            onClick={closeAddItem}
          >
            Cancel
          </button>
          <button
            onClick={editTodo}
            className="bg-tertiary-1 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-xs"
          >
            Edit Task
          </button>
        </div>
      </div>
    </>
  );
}

export default EditItem;
