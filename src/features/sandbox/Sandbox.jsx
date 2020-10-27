import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  increment,
  decerment,
} from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>testing 123</h1>
      <h3>the data is... {data} </h3>
      <Button
        content="increment"
        color="green"
        onClick={() => dispatch(increment(20))}
      />
      <Button
        content="decrement"
        color="red"
        onClick={() => dispatch(decerment(10))}
      />
    </>
  );
}
