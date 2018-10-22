const initialState = true;

export default function statusBtn(state = initialState, action) {
  if (action.type === "STATUS_BUTTON") {
    return action.payload;
  }
  return state;
}
