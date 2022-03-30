import { count } from "console";
import React, { useEffect, useReducer } from "react";

type StateType = {
  count: number;
};
const initialState = { count: 1 };

const reducer = (state: StateType, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload ?? 1 )};
    case "decrement":
      return { count: state.count - (action.payload ?? 1) };
    default:
      return { count: state.count };
  }
};

export const AdvancedTS = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Component Initialized");
    return () => {
      console.log("Component Unmounted");
    };
  });

  return (
    <p>
      Advanced Typescript
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          +
        </button>
      </>
    </p>
  );
};
