import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events }) {
  return (
    <div>
      {events.map((event) => {
        return <EventListItem event={event} key={event.id} />;
      })}
    </div>
  );
}
