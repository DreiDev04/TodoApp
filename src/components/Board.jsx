import React from "react";
import IndividualTask from "./IndividualTask";

function Board() {
  return (
    <div
      className=" container p-4 text-light-1 font-OpenSans "
    >
      <h1 className="font-bold text-4xl mb-4">
        Today{" "}
        <span className="px-3 py-1 m-2 border border-light-3 rounded-lg text-3xl">0</span>
      </h1>
      <button className="flex p-3 w-full border border-light-3 rounded-lg hover:bg-tertiary-1">
        + Add New Task
      </button>
      <IndividualTask name="Humiram ng putanginang crimping tool" />
      <IndividualTask name="Mag crimp ka tangina mo" />
      <IndividualTask name="Magdota ka hanggang mamutla" />
    </div>
  );
}

export default Board;
