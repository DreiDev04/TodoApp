import React from "react";
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
  Label,
  Popover,
} from "react-aria-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function DayPicker() {
  return (
    <div className="flex text-md mb-4">
      <h1 className="mr-10 my-auto">Date:</h1>
      <DatePicker className="">
        <Group className="flex p-2 rounded-lg border border-light-3">
          <DateInput className="flex">
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <Button>
            <FontAwesomeIcon className="p-1" icon={faCalendarDays} />
          </Button>
        </Group>
        <Popover>
          <Dialog className="flex bg-dark-3 rounded-lg p-3 align-middle justify-center ">
            {/* <Calendar className=" items-center gap-1 pb-2 px-1 font-serif w-full text-light-1">
              <header className="flex font-semibold text-sm gap-5 justify-center ">
                <Button className="" slot="previous">
                  ◀
                </Button>
                <Heading className="text-lg font-bold text-secondary-2" />
                <Button className="" slot="next">
                  ▶
                </Button>
              </header> 
              <CalendarGrid className="border-spacing-3 border-separate text-primary-1">
                {(date) => <CalendarCell date={date} className="text-xs text-tertiary-1 font-semibold" />}
              </CalendarGrid>
            </Calendar> */}

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
                      className=" w-8 h-9 outline-none cursor-default rounded-lg flex items-center justify-center text-light-1 outside-month:text-dark-1 hover:bg-light-2 hover:text-dark-3 pressed:bg-gray-200 selected:bg-tertiary-1 selected:text-light-1 focus-visible:ring ring-tertiary-1 ring-offset-1"
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
