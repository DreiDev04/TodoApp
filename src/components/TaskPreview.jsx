import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";

function TaskPreview({ todos }) {
  // const date =  todos.dateAndTime.toDate().toString();
  const date = todos.dateAndTime && todos.dateAndTime.toDate().toLocaleString();
  // console.log(date);
  return (
    <div className="text-xs ml-10 flex align-middle ">
      <ul className="flex gap-4 ">
        {/* <li>{todos.description && todos.description}</li> */}
        <li className="flex gap-1">
          <div
            className={`w-3 h-3 ${
              todos.category === "Personal"
                ? "bg-sticky-19"
                : todos.category === "Work"
                ? "bg-sticky-4"
                : todos.category === "Study"
                ? "bg-sticky-3"
                : todos.category === "Others"
                ? "bg-sticky-13"
                : ""
            } rounded my-auto `}
          ></div>
          <p>{todos.category && todos.category}</p>
        </li>
        <li className="flex gap-1">
          <span>
            <FontAwesomeIcon icon={faCalendarXmark} />
          </span>
          {date}
        </li>
      </ul>
    </div>
  );
}

export default TaskPreview;
