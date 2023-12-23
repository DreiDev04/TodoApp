import TaskInput from "../components/flowbite/TaskInput";
import DayPick from "../components/flowbite/DayPick";
import DayPicker from "./reactAria/DayPicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import TaskTextArea from "./flowbite/TaskTextArea";
import AddItemSelect from "./flowbite/AddItemSelect";
import TimeSelector from "./reactAria/TimeSelector";

import { useContext } from "react";
import AddItemContext from "./context/AddItemContext";

function AddItem() {
  const { setIsAddItem } = useContext(AddItemContext);

  function CloseAddItem() {
    setIsAddItem(false);
  }

  return (
    <div className="sticky top-0 right-0 p-2">
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
          <button className="bg-tertiary-1 rounded-lg px-10 py-2.5 border border-light-3 text-light-1 text-xs">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
