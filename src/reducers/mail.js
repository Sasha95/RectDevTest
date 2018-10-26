const initialState = {
  email: ""
};

export default function userMail(state = initialState, action) {
  // console.log(action.payload);
  if (action.type === "USER_EMAIL") {
    return action.payload;
  }
  return state;
}
