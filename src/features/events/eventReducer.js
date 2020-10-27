import { CREATE_EVENT } from "./eventConstants";

const { sampleData } = require("../../app/api/sampleData");

const initalState = {
  events: sampleData,
};

export default function eventReducer(state = initalState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
  }
}
