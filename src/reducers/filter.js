const initialState = "";

export default function filterUser(state = initialState, action) {
  if (action.type === "FILTER_USER") {
    return action.payload;
  }
  return state;
}
