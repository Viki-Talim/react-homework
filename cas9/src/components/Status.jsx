import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  feelingHappy,
  feelingSad,
  feelingTired,
} from "../actions/StatusActions";
export const Status = () => {
  const dispatch = useDispatch();
  const happy = useSelector((state) => state.StatusReducer.happy);
  const sad = useSelector((state) => state.StatusReducer.sad);
  const tired = useSelector((state) => state.StatusReducer.tired);

  useEffect(() => {
    dispatch(feelingHappy());
    dispatch(feelingSad());
    dispatch(feelingTired());
  }, []);

  return (
    <div id="status">
      <h2>Mood:{happy}</h2>
      <h2>Mood:{sad}</h2>
      <h2>Mood:{tired}</h2>
    </div>
  );
};
