import React from "react";
import "./App.css";
import Navbar from "./features/nav/Navbar";
import EventDashboards from "./features/events/eventDashboard/EventDashboards";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "./features/home/HomePage";
import EventDetailedPage from "./features/events/eventDetailed/EventDetailedPage";
import EventForm from "./features/events/eventForm/EventForm";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />

      <Route
        // this path says that if the route has anything after the '/', render everything inside the redner function.
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboards} />
              <Route exact path="/event/:id" component={EventDetailedPage} />
              <Route
                exact
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
              {/* This will open up this route if either of these are hit */}
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
