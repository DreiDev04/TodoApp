import React from "react";
import { Checkbox } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import MainContext from "./context/MainContext";

function IndividualTask({ name }) {
  const { setIsAddItem } = useContext(MainContext);
  function OpenAddItem() {
    setIsAddItem(true);
    console.log("clicked");
  }

  return (
    <div className=" flex py-2 px-5 items-center border-b border-b-light-3">
      <Checkbox id="accept" className="mr-5" />
      <h1>{name}</h1>
      <button
        className="ml-auto p-2 rounded-lg hover:bg-dark-4"
        type="button"
        onClick={OpenAddItem}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default IndividualTask;
