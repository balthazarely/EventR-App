import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = () => {
    // If selected Event is not null, we know we are creating a new event. Otherwise, we are editing event
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Segment clearing>
      {selectedEvent ? <h4>Edit Event</h4> : <h4>Create New Event</h4>}
      <Header>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <input
              type="text"
              name="title"
              placeholder="Event title"
              value={values.title}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={values.category}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={values.description}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={values.city}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={values.venue}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={values.date}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            type="submit"
            floated="right"
            content="Cancel"
            as={Link}
            to="/events"
          />
        </Form>
      </Header>
    </Segment>
  );
}
