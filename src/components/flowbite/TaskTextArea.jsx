import { useContext } from "react";
import TaskCollectionContext from "../context/TaskCollectionContext";

function TaskTextArea({ placeholder }) {
  const { setTaskDescription } = useContext(
    TaskCollectionContext
  );

  function handleChange(e) {
    setTaskDescription(e.target.value);
  }
  return (
    <div>
      <textarea
        id="message"
        rows="4"
        className="
        bg-dark-2 text-light-2 text-md font-medium
        2 block p-2.5 w-full  rounded-lg border border-light-3 focus:ring-light-3 focus:border-light-3 resize-none placeholder:text-light-1  mb-3 focus:placeholder-transparent"
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default TaskTextArea;
