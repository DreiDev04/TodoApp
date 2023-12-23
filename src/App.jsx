import Navigation from "./components/Navigation";
import Board from "./components/Board";
import AddItem from "./components/AddItem";

import AddItemContext from "./components/context/AddItemContext";
import React, { useContext } from "react";

function App() {
  const { isAddItem,  } = useContext(AddItemContext);

  return (
    <div className="flex">
      <div className="w-4/12 m-4">
        <Navigation />
      </div>
      <div className="w-full m-4">
        <Board />
      </div>
      {isAddItem ? (
        <div className="w-5/12 m-4">
          <AddItem />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
