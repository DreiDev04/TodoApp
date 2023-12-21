import React from "react";

function TaskInput({ placeholder }) {
  return (
    <div>
      <input
        type="text"
        id="first_task"
        className="
          bg-dark-2 text-light-2 
          text-lg rounded-lg block w-full p-2.5 border border-light-3 outline-b-light-2 focus:ring-light-3 focus:border-light-3 placeholder-light-1 placeholder:font-semibold placeholder:p-0 mb-2 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default TaskInput;
