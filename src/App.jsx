import Navigation from "./components/Navigation";
import TodayEvent from "./components/TodayEvent";
import UpcomingEvent from "./components/UpcomingEvent";
import StickyNotesEvent from "./components/StickyNotesEvent";
import AddItem from "./components/AddItem";

import AddItemContext from "./components/context/AddItemContext";
import React, { useContext } from "react";

function App() {
  const { isAddItem,  } = useContext(AddItemContext);

  return (
    <div className="flex">
      <div className="w-3/12">
        <Navigation />
      </div>
      <div className="w-full m-4">
        {/* <TodayEvent todayTextSize={"4xl"} todayNum={true} title={"Today"}/> */}
        {/* <UpcomingEvent/> */}
        <StickyNotesEvent/>
      </div>
      {isAddItem ? (
        <div className="w-5/12">
          <AddItem />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
