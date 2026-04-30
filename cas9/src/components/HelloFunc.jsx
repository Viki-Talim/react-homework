import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sayHello,sayGoodbye } from "../actions/SayHelloActions";
export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const goodbye = useSelector((state) => state.SayHelloReducer.goodbye);
  useEffect(() => {
    dispatch(sayHello());
    dispatch(sayGoodbye());
  }, []);

  return (
    <div id="hello-func">
      <h2>Functional component:{greeting}</h2>
      <h2>Comp 2: {goodbye}</h2>
    </div>
  );
};
