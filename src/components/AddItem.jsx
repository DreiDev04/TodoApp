import TaskInput from "../components/flowbite/TaskInput";

import DayPicker from "./reactAria/DayPicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TaskTextArea from "./flowbite/TaskTextArea";
import AddItemSelect from "./flowbite/AddItemSelect";
import TimeSelector from "./reactAria/TimeSelector";
import TaskCollectionContext from "./context/TaskCollectionContext";
import { useContext } from "react";
import MainContext from "./context/MainContext";

function AddItem() {
  const { setIsAddItem } = useContext(MainContext);
  const { taskText, taskDescription, taskCategory, taskDate, taskTime } = useContext(
    TaskCollectionContext
  );
  function CloseAddItem() {
    setIsAddItem(false);
  }

  function UploadTask() {
    console.log("text is: " + taskText);
    console.log("desc is: " + taskDescription);
    console.log("categ is: " + taskCategory);
    console.log("date is: " + taskDate);
    console.log("time is: " + taskTime);
  }
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
          <div className="container ">
            <DayPicker />
          </div>

          <div>
            <TimeSelector />
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
            onClick={UploadTask}
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
