import { useContext } from "react";
import TaskCollectionContext from "../context/TaskCollectionContext";

function TaskInput({ placeholder }) {
  const { setTaskText } = useContext(
    TaskCollectionContext
  );

  function handleChange(e) {
    setTaskText(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        id="first_task"
        className="
          bg-dark-2 text-light-2 
          text-lg rounded-lg block w-full p-2.5 border border-light-3 outline-b-light-2 focus:ring-light-3 focus:border-light-3 placeholder-light-1 placeholder:font-semibold placeholder:p-0 mb-2 focus:placeholder-transparent"
        placeholder={placeholder}
        required
        onChange={handleChange}
      />
    </div>
  );
}

export default TaskInput;
