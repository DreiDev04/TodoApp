import Tasks from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAnglesRight,
  faListCheck,
  faCalendarDays,
  faNoteSticky,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import MainContext from "./context/MainContext";

const NavContent = ({ onClose }) => (
  <div className="container flex flex-col justify-between h-full">
    <div>
      <div className="container flex items-center mb-6">
        <h1>Menu</h1>
        <button type="button" className="ml-auto" onClick={onClose}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="container border-b border-b-light-3 mb-5">
        <h3 className="font-bold text-xs pl-1 mb-1">TASK</h3>
        <div className="container">
          <Tasks name="Today" icon={faListCheck} />
          <Tasks name="Upcoming" icon={faAnglesRight} />
          <Tasks name="Calendar" icon={faCalendarDays} />
          <Tasks name="Stricky Notes" icon={faNoteSticky} />
        </div>
        <br />
      </div>
    </div>
    <div className="container">
      <button
        type="button"
        className="text-light-2 hover:bg-tertiary-1 focus:ring-4 focus:outline-none rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 w-full"
      >
        <span>
          <FontAwesomeIcon className="me-2" icon={faSignOut} />
        </span>
        Sign out
      </button>
    </div>
  </div>
);

function Navigation() {
  const [show, setShow] = useState(true);
  const { setIsNavigation } = useContext(MainContext);
  const toggleNav = () => {
    setShow(!show);
    setIsNavigation(!show);
    console.log("nav is " + show);
  };

  return (

      <div
        className={`  p-4 bg-${
          show ? "dark-2" : "dark-1"
        } h-screen text-light-1 font-OpenSans font-bold justify-between flex flex-col sticky top-0 right-0 container p-2`}
      >
        {show ? (
          <NavContent onClose={toggleNav} />
        ) : (
          <div className="container flex ">
            <button
              type="button"
              className="justify-center align-middle w-full"
              onClick={toggleNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        )}
      </div>

  );
}

export default Navigation;
