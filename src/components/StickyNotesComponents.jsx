import React from "react";
import { TextField, Input, TextArea } from "react-aria-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function StickyNotesComponents({ title, desc }) {
  return (
    <div className="bg-tertiary-1 rounded-lg h-64 p-5 container flex flex-col">
      <div className="flex">
        <Input
          className="w-full appearance-none border-none outline-none bg-transparent p-1 m-1 text-lg font-bold"
          value={title}
        />
        <button className="hover:bg-red-500 px-3 rounded-lg">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="flex-1">
        <TextArea
          className="w-full appearance-none border-none outline-none bg-transparent p-1 m-1 h-full resize-none overflow-y-auto"
          value={desc}
        />
      </div>
    </div>
  );
}

export default StickyNotesComponents;
