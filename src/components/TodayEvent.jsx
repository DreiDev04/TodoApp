import React from "react";
import IndividualTask from "./IndividualTask";

function TodayEvent({ todayTextSize, todayNum, title}) {
  return (
    <div className="container p-4 text-light-1 font-OpenSans">
      <h1 className={`font-bold text-${todayTextSize} mb-4`}>
        {title}
        {todayNum ? (<span className={`px-3 py-1 m-3 border border-light-3 rounded-lg text-${todayTextSize}`}>
          0
        </span>):("") }
        
      </h1>
      <button className="flex p-3 w-full border border-light-3 rounded-lg hover:bg-tertiary-1">
        + Add New Task
      </button>
      <IndividualTask name="Mag reminiscereminisce kung babalik pa siya" />
      <IndividualTask name="Maging delulu overnight 24/7 every year" />
      <IndividualTask name="Happy New Year, btw kumain kana?" />
    </div>
  );
}

export default TodayEvent;
