import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import SayHelloReducer from "./reducers/SayHelloReducer";
import StatusReducer from "./reducers/StatusReducer";

const reducer = {
  SayHelloReducer: SayHelloReducer,
  StatusReducer: StatusReducer,
};
const logger = createLogger();

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
