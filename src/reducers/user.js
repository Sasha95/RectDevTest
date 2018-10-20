const initialState = [];

export default function onAddUser(state = initialState, action) {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_USER") {
    return state;
  }
  return state;
}
