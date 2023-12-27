import React from "react";

function EditItem() {
  return (
    <div className="container p-5 text-light-1 font-OpenSans rounded-lg bg-dark-2 h-screen font-bold flex flex-col justify-between ">
      <div>
        <div className="flex justify-between mb-3">
          <h1 className="text-lg">Tasks:</h1>
        </div>
        <div className="container">
        </div>
        <div className="container ">
        </div>
        <div className="flex justify-between">
          <h1 className="my-auto text-lg font-semibold">Due: </h1>
          {/* <DatetimePicker /> */}
        </div>
      </div>
    
    </div>
  );
}

export default EditItem;
