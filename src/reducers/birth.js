const initialState = {
  birth: ""
};

export default function userBirth(state = initialState, action) {
  if (action.type === "USER_BIRTH") {
    return action.payload;
  }
  return state;
}
