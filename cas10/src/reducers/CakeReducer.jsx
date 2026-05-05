import {
  UPDATE_BUY_INPUT,
  BUY_CAKE,
  RESTOCK_CAKES,
  UPDATE_RESTOCK_INPUT,
  SET_ERROR,
} from "./../constants/CakeConstants";
const initialState = {
  cakes: 10,
  buyInputValue: 0,
  errorMessage: "",
  restockInputValue: 0,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BUY_INPUT:
      return { ...state, 
        buyInputValue: action.payload };

    case BUY_CAKE:
      if (state.buyInputValue <= 0) {
        return {
          ...state,
          errorMessage: "Please enter a valid amount to buy.",
        };
      }
      if (state.buyInputValue > state.cakes) {
        return {
          ...state,
          errorMessage: `Not enough cakes! Only ${state.cakes} left.`,
        };
      }
      return {
        ...state,
        cakes: state.cakes - state.buyInputValue,
        buyInputValue: 0,
        errorMessage: "",
      };
    case UPDATE_RESTOCK_INPUT:
      return { ...state, restockInputValue: action.payload };
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case RESTOCK_CAKES:
      if (state.restockInputValue <= 0) {
        return {
          ...state,
          errorMessage: "Enter a positive number to restock.",
        };
      }
      return {
        ...state,
        cakes: state.cakes + state.restockInputValue,
        restockInputValue: 0,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default CakeReducer;
