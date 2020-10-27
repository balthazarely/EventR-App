import React from "react";
import EventList from "./EventList";
import { Grid } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboards() {
  const { events } = useSelector((state) => state.event);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  //   selectEvent(null);
  // };

  const handleDeleteEvent = (eventID) => {
    // setEvents(events.filter((evt) => evt.id !== eventID));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  );
}
