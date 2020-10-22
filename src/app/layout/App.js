import React, { useState } from "react";
import "./App.css";
import Navbar from "./nav/Navbar";
import EventDashboards from "./features/events/eventDashboard/EventDashboards";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import EventDetailPage from "./features/events/eventDetails/EventDetailPage";
import EventForm from "./features/events/eventForm/EventForm";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <div>
      <Route exact path="/" component={HomePage} />

      <Route
        // this path says that if the route has anything after the '/', render everything inside the redner function.
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              <Route exact path="/events" component={EventDashboards} />
              <Route exact path="/events/:id" component={EventDetailPage} />
              <Route exact path="/createEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
