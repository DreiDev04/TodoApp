import React from "react";
import Datetime from "react-datetime";
import "./DateTimeStyle.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function DatetimePicker() {
  const yesterday = moment().subtract(1, "day");

  const valid = function (current) {
    return current.isAfter(yesterday);
  };

  return (
    <div className="relative">
      <Datetime
        inputProps={{
          className:
            "bg-dark-2 rounded-lg border border-light-3 text-light-1 text-sm focus:ring-light-3 focus:border-light-3 p-1.5 pl-8 ml-auto",
        }}
        popoverProps={{
          placement: "right-start", // Adjust the placement as needed
        }}
        isValidDate={valid}
        renderInput={(props) => (
          <>
            <FontAwesomeIcon
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 cursor-pointer text-light-1"
              icon={faCalendarDays}
              onClick={props.onClick}
            />
            <input {...props} />
          </>
        )}
      />
    </div>
  );
}

export default DatetimePicker;
