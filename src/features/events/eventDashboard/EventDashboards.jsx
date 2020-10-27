import React from "react";
import EventList from "./EventList";
import { Grid } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function EventDashboards() {
  const { events } = useSelector((state) => state.event);

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  );
}
