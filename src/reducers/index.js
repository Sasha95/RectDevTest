import { combineReducers } from "redux";
import statusBtn from "./statusButton";
import checkLng from "./languages";
import users from "./user";
import filterUser from "./filter";

export default combineReducers({
  statusBtn,
  checkLng,
  users,
  filterUser
});
