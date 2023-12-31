import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tasks({ name, icon, onClick, taskLength }) {
  return (
    <div className=" flex text-sm py-1 hover:bg-dark-4 rounded-md hover:cursor-pointer" onClick={onClick}>
      <div className=" flex items-center w-max">
        <FontAwesomeIcon className="px-2" icon={icon} />
        <p>{name}</p>
      </div>
      <div className="bg-tertiary-1 py-1 px-2 rounded-md ml-auto">
        <p className="text-xs text-light-2 ">{taskLength}</p>
      </div>
    </div>
  );
}

export default Tasks;
