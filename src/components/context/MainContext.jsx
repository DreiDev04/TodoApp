import { useState, createContext } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [isAddItem, setIsAddItem] = useState(false);
  const [isEditItem, setIsEditItem] = useState(false);
  const [isNavigation, setIsNavigation] = useState(true);

  return (
    <MainContext.Provider
      value={{
        isAddItem,
        setIsAddItem,
        isNavigation,
        setIsNavigation,
        isEditItem,
        setIsEditItem,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
