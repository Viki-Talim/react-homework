export const feelingHappy = () => {
  return {
    type: "SET_HAPPY",
    payload: "I'm very happy today, we don't have class",
  };
};
export const feelingSad = () => {
  return {
    type: "SET_SAD",
    payload: "I'm sad because I have homework",
  };
};

export const feelingTired = () => {
  return {
    type: "SET_TIRED",
    payload: "I'm tired but I need to practice React",
  };
};
