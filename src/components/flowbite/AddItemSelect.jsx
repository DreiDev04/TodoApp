import { useContext } from "react";
import TaskCollectionContext from "../context/TaskCollectionContext";

function AddItemSelect() {
  const { setTaskCategory } = useContext(
    TaskCollectionContext
  );

  const handleChange = (e) => {
    setTaskCategory(e.target.value);
  };

  return (
    <div className="flex mb-3">
      <label 
      htmlFor="List"
        className="text-lg font-medium text-light-2 my-auto "
      >
        Category
      </label>
      <select
        id="List"
        className="bg-dark-2 border border-light-3 text-light-2 text-sm rounded-lg focus:ring-light-3 focus:border-light-3 p-1.5 ml-auto"
        onChange={handleChange}
      >
        <option defaultValue="Others">Others</option>
        <option defaultValue="personal">Personal</option>
        <option defaultValue="work">Work</option>
        <option defaultValue="study">Study</option>
        
      </select>
    </div>
  );
}

export default AddItemSelect;
