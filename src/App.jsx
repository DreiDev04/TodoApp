import React, { useContext } from "react";
import Navigation from "./components/Navigation";
import TodayEvent from "./components/TodayEvent";
import UpcomingEvent from "./components/UpcomingEvent";
import StickyNotesEvent from "./components/StickyNotesEvent";
import AddItem from "./components/AddItem";
import MainContext from "./components/context/MainContext";
import TaskContext from "./components/context/TaskContext";
import CalendarEvent from "./components/CalendarEvent";
import { TaskCollectionProvider } from "./components/context/TaskCollectionContext";
import EditItem from "./EditItem";

function App() {
  const { isAddItem, isNavigation, isEditItem } = useContext(MainContext);
  const { task } = useContext(TaskContext);

  return (
    <div className="flex">
      <div className={isNavigation ? "w-64" : "w-24"}>
        <Navigation />
      </div>
      <div className="w-screen m-4 flex">
        {task === "today" && (
          <TodayEvent todayTextSize={"4xl"} todayNum={true} title={"Today"} />
        )}
        {task === "upcoming" && <UpcomingEvent />}
        {task === "sticky" && <StickyNotesEvent />}
        {task === "calendar" && <CalendarEvent />}
        {isAddItem && (
          <div className="w-1/2">
            <TaskCollectionProvider>
              <AddItem />
            </TaskCollectionProvider>
          </div>
        )}
        {!isAddItem && isEditItem && (
          <div className="w-1/2">
            <TaskCollectionProvider>
              <AddItem />
            </TaskCollectionProvider>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
