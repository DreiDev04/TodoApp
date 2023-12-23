import React from "react";
import StickyNotesComponents from "./StickyNotesComponents";

function StickyNotesEvent() {
  return (
    <div className="container p-4 text-light-1 ">
      <h1 className="font-bold text-4xl  mb-4">
        Sticky Notes
        <span className="px-3 py-1 m-3 border border-light-3 rounded-lg text-4xl">
          0
        </span>
      </h1>
      <div className="bg-dark-3 rounded-lg h-full grid grid-cols-3 gap-5 p-5  ">
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />{" "}
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />{" "}
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />{" "}
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />{" "}
        <StickyNotesComponents
          title={"HAHA"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat corrupti adipisci architecto, illum exercitationem. Placeat ratione ut voluptatum cumque accusantium soluta voluptates voluptatem accusamus aliquam sit laboriosam, debitis ullam? "
          }
          className=""
        />
      </div>
    </div>
  );
}

export default StickyNotesEvent;
