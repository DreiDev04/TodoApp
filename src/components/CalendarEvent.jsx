import React from "react";

function CalendarEvent({date }) {
  return (
    <div className="container p-4 text-light-1 font-OpenSans">
      <h1 className="font-bold text-3xl mb-4">
        {date}
        December 25, 2023
      </h1>
      
    </div>
  );
}

export default CalendarEvent;
