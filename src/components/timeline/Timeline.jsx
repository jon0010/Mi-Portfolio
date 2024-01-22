import React from "react";
import TimelineItem from "../timelineItem/TimelineItem";

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          date={event.date}
          event={event.event}
          isLast={index === events.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
