const initialState = {
  happy: "I'm happy",
  sad: "I'm sad",
  tired: "I'm tired",
};

const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HAPPY":
      return {
        ...state,
        happy: action.payload,
      };
    case "SET_SAD":
      return {
        ...state,
        sad: action.payload,
      };
    case "SET_TIRED":
      return {
        ...state,
        tired: action.payload,
      };

    default:  return state;
  }
};

export default StatusReducer;
