import React from "react";

const TimelineItem = ({ date, event }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-circle position-absolute"></div>
      <div className="timeline-line"></div>
      <div className="timeline-content">
        <div className="timeline-date text-start">{date}</div>
        <div className="timeline-event">{event}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
