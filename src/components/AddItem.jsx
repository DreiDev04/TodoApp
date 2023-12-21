import TaskInput from "../components/flowbite/TaskInput";
import DayPick from "../components/flowbite/DayPick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TaskTextArea from "./flowbite/TaskTextArea";
import AddItemSelect from "./flowbite/AddItemSelect";

function AddItem() {
  return (
    <div className="container p-5 text-light-1 font-OpenSans rounded-lg bg-dark-2 h-screen font-bold flex flex-col justify-between">
      <div>
        <div className="flex justify-between mb-3">
          <h1 className="text-lg">Tasks:</h1>
          <button className="hover:bg-dark-4 rounded px-2" type="button">
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
          <DayPick />
        </div>
      </div>
      <div className="flex justify-evenly">
        <button className="bg-dark-2 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-sm">
          Cancel
        </button>
        <button className="bg-tertiary-1 rounded-lg px-10 py-2.5 border border-light-3 text-light-2 text-sm">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddItem;
