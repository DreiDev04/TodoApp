import React from "react";
import Datetime from "react-datetime";
import "./DateTimeStyle.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import TaskCollectionContext from "../context/TaskCollectionContext"; 


function DatetimePicker() {
  const { setTaskDateAndTime } = useContext(TaskCollectionContext);

  const handleChange = (e) => {
    setTaskDateAndTime(e._d);
    console.log(e._d);
  }
  const currentDateString = moment().format("MM/DD/YYYY HH:mm A");
  const yesterday = moment().subtract(1, "day");

  const valid = function (current) {
    return current.isAfter(yesterday);
  };

  return (
    <div className="relative">
      <Datetime onChange={handleChange}
        inputProps={{
          className:
            "bg-dark-2 rounded-lg border border-light-3 text-light-1 text-sm focus:ring-light-3 focus:border-light-3 p-1.5 pl-3  placeholder-light-1 ",
            placeholder: currentDateString
        }}
        isValidDate={valid}
        renderInput={(props) => (
          <>
            <FontAwesomeIcon
              className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 cursor-pointer text-light-1"
              icon={faCalendarDays}
              onClick={props.onClick}
            />
            <input {...props}/>
          </>
        )}
      />
    </div>
  );
}

export default DatetimePicker;
