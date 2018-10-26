const initialState = {
  name: ""
};

export default function userName(state = initialState, action) {
  if (action.type === "USER_NAME") {
    return action.payload;
  }

  return state;
}
