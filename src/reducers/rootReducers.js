import { combineReducers } from "redux";
import locale from "./locale";
import contact from "./contact";
import info from "./info";

export default combineReducers({
    locale,
    contact,
    info
});