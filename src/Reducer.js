export const initialState = {
  basket: []
};

function Reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };
    case "ADD_TO_BASKET":
      //logic to add in basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    default:
      return state;
  }
}

export default Reducer;
