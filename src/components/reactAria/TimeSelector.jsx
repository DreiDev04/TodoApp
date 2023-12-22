import React from "react";
import { TimeField } from "@adobe/react-spectrum";

function TimeSelector() {
  return (
    <div className="flex mb-4 items-center">
    <div>
      <h1 className="mr-10 my-auto">Time:</h1>
    </div>
      <div className="p-2 w-max border border-light-3  rounded-md selected:bg-red-500">
        <TimeField />
      </div>
    </div>
  );
}

export default TimeSelector;
