const initialState = [];

export default function checkLng(state = initialState, action) {
  if (action.type === "CHECKED_LANGUAGES") {
    return action.payload;
  }
  return state;
}
