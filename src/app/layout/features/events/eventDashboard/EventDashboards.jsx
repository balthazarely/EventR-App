import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { Grid } from "semantic-ui-react";
import { sampleData } from "../../../../api/sampleData";

export default function EventDashboards({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
  };

  const handleDeleteEvent = (eventID) => {
    setEvents(events.filter((evt) => evt.id !== eventID));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={selectEvent}
            deleteEvent={handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvents}
              createEvent={handleCreateEvent}
              selectedEvent={selectedEvent}
              updateEvent={handleUpdateEvent}
              // The key method below makes the component update when these key items change
              key={selectedEvent ? selectedEvent.id : null}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
