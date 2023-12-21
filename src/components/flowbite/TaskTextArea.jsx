import React from "react";

function TaskTextArea({ placeholder }) {
  return (
    <div>
      <textarea
        id="message"
        rows="4"
        className="
        bg-dark-2 text-light-2 text-md font-medium
        2 block p-2.5 w-full  rounded-lg border border-light-3 focus:ring-light-3 focus:border-light-3 resize-none placeholder:text-light-1  mb-3"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TaskTextArea;
