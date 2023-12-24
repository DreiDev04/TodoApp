import React, { useContext } from "react";
import Navigation from "./components/Navigation";
import TodayEvent from "./components/TodayEvent";
import UpcomingEvent from "./components/UpcomingEvent";
import StickyNotesEvent from "./components/StickyNotesEvent";
import AddItem from "./components/AddItem";
import MainContext from "./components/context/MainContext";

function App() {
  const { isAddItem, isNavigation } = useContext(MainContext);

  return (
    <div className="flex">
      <div className={isNavigation ? "w-64" : "w-24"}>
        <Navigation />
      </div>
      <div className="w-screen m-4 flex">
        <div className="w-full">
          <TodayEvent todayTextSize={"4xl"} todayNum={true} title={"Today"} />
          <UpcomingEvent />
          <StickyNotesEvent />
        </div>
        {isAddItem && (
          <div className="w-80">
            <AddItem />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
