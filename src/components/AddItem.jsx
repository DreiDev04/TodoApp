import TaskInput from "../components/flowbite/TaskInput";
import DatetimePicker from "./ownedComponents/DatetimePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TaskTextArea from "./flowbite/TaskTextArea";
import AddItemSelect from "./flowbite/AddItemSelect";
import TaskCollectionContext from "./context/TaskCollectionContext";
import TaskContext from "./context/TaskContext";
import { useContext } from "react";
import MainContext from "./context/MainContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddItem() {
  const { fetchData } = useContext(TaskContext);

  const { setIsAddItem } = useContext(MainContext);
  const { taskText, taskDescription, taskCategory, taskDateAndTime } =
    useContext(TaskCollectionContext);
  function CloseAddItem() {
    setIsAddItem(false);
  }

  const createTodo = async (e) => {
    e.preventDefault();
    if (!taskText) {
      alert("Please enter a task name");
      return;
    }
    if (!taskDateAndTime) {
      alert("Please enter a date and time");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: taskText,
      completed: false,
      description: taskDescription,
      category: taskCategory,
      dateAndTime: taskDateAndTime,
    });
    CloseAddItem();
    fetchData();
  };
  return (
    <>
      <div className="container p-5 text-light-1 font-OpenSans rounded-lg bg-dark-2 h-screen font-bold flex flex-col justify-between ">
        <div>
          <div className="flex justify-between mb-3">
            <h1 className="text-lg">Tasks:</h1>
            <button
              className="hover:bg-dark-4 rounded px-2"
              type="button"
              onClick={CloseAddItem}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="container">
            <TaskInput placeholder={"Add New Task"} />
            <TaskTextArea placeholder={"Add Description"} />
          </div>
          <div className="container ">
            <AddItemSelect />
          </div>
          <div className="flex justify-between">
            <h1 className="my-auto text-lg font-semibold">Due: </h1>
            <DatetimePicker />
          </div>
        </div>
        <div className="flex justify-evenly">
          <button
            className="bg-dark-2 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-xs"
            onClick={CloseAddItem}
          >
            Cancel
          </button>
          <button
            onClick={createTodo}
            className="bg-tertiary-1 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-xs"
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}

export default AddItem;
