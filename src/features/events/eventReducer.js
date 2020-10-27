import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const { sampleData } = require("../../app/api/sampleData");

const initalState = {
  events: sampleData,
};

//====== Actions
// Describe what the event is going to do. Wrap these inside action creators, which return the action and the payload. Actions are sent to the reducer. Descibe what has happened, but don't describe how the application's state changes.

//===== Reducers
// Describe how the application's state changes in response to the actions sent. This is where the swtich statement is.

//===== Store
// This is where we hold the app's state. State can be changed via the actions.

export default function eventReducer(state = initalState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((event) => event.id !== payload.id),
          payload,
        ],
      };
    case DELETE_EVENT:
      return {
        events: [...state.events.filter((event) => event.id !== payload)],
      };
    default:
      return state;
  }
}
