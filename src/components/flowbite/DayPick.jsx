import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-dark-4 ",
    todayBtn: "",
    clearBtn: "bg-primary-2 text-light-1 border-none hover:bg-dark-2",
    icons: "bg-light-3 text-light-2 hover:bg-dark-2",
    text: "text-light-1",
    disabledText: " text-dark-1",
    input: "",
    inputIcon: "",
    selected: "bg-primary-1",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>{"<"}</span>,
    next: () => <span>{">"}</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};

function MyDatepicker() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const handleChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const handleClose = (state) => {
    setShow(state);
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  return (
    <div className="flex mb-4">
      
      <div className="text-md font-medium text-light-2 my-auto mr-10">
        <label
          htmlFor="DayPicker"
          className="" 
        >
          Due date:
        </label>
      </div>
      <div>
        <Datepicker
          id="DayPicker"
          options={options}
          onChange={handleChange}
          show={show}
          setShow={handleClose}
          classNames="h-10"
        >
          <div>
            <input
              type="text"
              className="text-light-1 rounded-lg bg-dark-2 border border-dark-4 focus:ring-dark-3 focus:border-dark-3 outline-none w-32 "
              placeholder="Select Date"
              value={formatDate(selectedDate)}
              onChange={() => {}}
              onFocus={() => setShow(true)}
              readOnly
            />
          </div>
        </Datepicker>
      </div>
    </div>
  );
}

export default MyDatepicker;
