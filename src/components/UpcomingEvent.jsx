import React from "react";

import TodayEvent from "./TodayEvent";

function UpcomingEvent() {
  return (
    <div className={`container p-4 text-light-1 font-OpenSans`}>
      <div>
        <h1 className="font-bold text-4xl mb-4 ">
          Upcoming
          <span className="px-3 py-1 m-3 border border-light-3 rounded-lg text-3xl">
            0
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className=" rounded-lg border border-light-3">
          <TodayEvent todayTextSize={"xl"} todayNum={false} title={"Today"} />
        </div>
        <div className="flex w-full justify-between gap-3">
          <div className="rounded-lg border border-light-3 ">
            <TodayEvent
              todayTextSize={"xl"}
              todayNum={false}
              title={"Tommorow"}
            />
          </div>
          <div className="rounded-lg border border-light-3">
            <TodayEvent
              todayTextSize={"xl"}
              todayNum={false}
              title={"This Week"}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default UpcomingEvent;
