import Navigation from "./components/Navigation";
import Board from "./components/Board";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="flex">
      <div className="w-3/12 m-4"> 
        <Navigation />
      </div>
      <div className="w-5/12 m-4" > 
        <Board />
      </div>
      <div className="w-4/12 m-4"> 
        <AddItem />
      </div>
    </div>
  );
}

export default App;
