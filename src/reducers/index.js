import { combineReducers } from "redux";
import statusBtn from "./statusButton";
import checkLng from "./languages";
import filterUser from "./filter";
import userName from "./user";
import userMail from "./mail";
import userPhone from "./phone";
import userBirth from "./birth";

export default combineReducers({
  statusBtn,
  checkLng,
  filterUser,
  userName,
  userMail,
  userPhone,
  userBirth
});
