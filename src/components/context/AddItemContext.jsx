import { useState, createContext, useContext } from "react";

const AddItemContext = createContext();

export function AddItemProvider({ children }) {
  const [isAddItem, setIsAddItem] = useState(false);

  
  return (
    <AddItemContext.Provider value={{ isAddItem, setIsAddItem }}>
      {children}
    </AddItemContext.Provider>
  );
}

export default AddItemContext;
