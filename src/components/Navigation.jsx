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

function Navigation() {
  return (
    <div className="container rounded-lg p-4 bg-dark-2 h-screen text-light-1 font-OpenSans font-bold justify-between flex flex-col">
      <div className="container">
        <div className="container flex items-center mb-6">
          <h1>Menu</h1>
          <FontAwesomeIcon className="ml-auto" icon={faBars} />
        </div>

        <div className="container border-b border-b-light-3 mb-5">
          <h3 className="font-bold text-xs pl-1 mb-1">TASK</h3>
          <div className="container ">
            <Tasks name="Today" icon={faListCheck} />
            <Tasks name="Upcoming" icon={faAnglesRight} />
            <Tasks name="Calendar" icon={faCalendarDays} />
            <Tasks name="Stricky Notes" icon={faNoteSticky} />
          </div>
          <br />
        </div>
      </div>
      <div className="container ">
        <button
          type="button"
          className="text-light-2   hover:bg-tertiary-1 focus:ring-4 focus:outline-none  rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 w-full "
        >
          <span>
            <FontAwesomeIcon className="me-2" icon={faSignOut} />
          </span>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Navigation;
