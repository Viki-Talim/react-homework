import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "./../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const buyInput = useSelector((state) => state.CakeReducer.buyInputValue);
  const restockInput = useSelector((state) => state.CakeReducer.restockInputValue);
  const error = useSelector((state) => state.CakeReducer.errorMessage);

  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {error && <p>{error}</p>}
      <div>
        <input
          type="number"
          min={1}
          placeholder="Enter Amount "
          value={buyInput || ""}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_BUY_INPUT",
              payload: Math.max(0, parseInt(e.target.value) || 0),
            })
          }
        />
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>

      <div>
        <input
          type="number"
          placeholder="Amount to restock"
          value={restockInput || ""}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_RESTOCK_INPUT",
              payload: Math.max(0, parseInt(e.target.value) || 0),
            })
          }
        />
        <button onClick={() => dispatch(restockCakes())}>Restock Cakes</button>
      </div>
    </div>
  );
};
