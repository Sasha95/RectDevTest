const initialState = {
  phone: ""
};

export default function userPhone(state = initialState, action) {
  // console.log(action.payload);
  if (action.type === "USER_PHONE") {
    return action.payload;
  }
  return state;
}
