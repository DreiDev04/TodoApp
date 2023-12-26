import { useContext } from "react";
import TaskCollectionContext from "../context/TaskCollectionContext";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from "react-aria-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function DayPicker() {
  const {setTaskDate} = useContext(TaskCollectionContext);

  const handleDateSelect = (date) => {
    setTaskDate(date);
    console.log("Selected date:", date);
  };


  return (
    <div className="flex text-md mb-4">
      <h1 className="my-auto">Date:</h1>
      <DatePicker onSelect={handleDateSelect} className="ml-auto">
        <Group className="flex p-2 rounded-lg border border-light-3">
          <DateInput className="flex">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <Button>
            <FontAwesomeIcon className="p-1" icon={faCalendarDays} />
          </Button>
        </Group>
        <Popover placement="left">
          <Dialog className="flex bg-dark-3 rounded-lg p-3 align-middle justify-center ">
            <Calendar>
              <header className="flex font-semibold text-sm gap-5 justify-center ">
                <Button className="" slot="previous">
                  ◀
                </Button>
                <Heading className="text-lg font-bold text-primary-1" />
                <Button className=" " slot="next">
                  ▶
                </Button>
              </header>
              <CalendarGrid className="border-spacing-1 border-separate">
                <CalendarGridHeader>
                  {(day) => (
                    <CalendarHeaderCell className="text-xs text-primary-2 font-semibold">
                      {day}
                    </CalendarHeaderCell>
                  )}
                </CalendarGridHeader>
                <CalendarGridBody>
                  {(date) => (
                    <CalendarCell
                      date={date}
                      className="w-8 h-9 outline-none cursor-default rounded-lg flex items-center justify-center text-light-1 outside-month:text-dark-1 hover:bg-light-2 hover:text-dark-3 pressed:bg-gray-200 selected:bg-tertiary-1 selected:text-light-1 focus-visible:ring ring-tertiary-1 ring-offset-1"
                    />
                  )}
                </CalendarGridBody>
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
    </div>
  );
}

export default DayPicker;
