import { combineReducers } from "redux";
import locale from "./locale";
import contact from "./contact";
import services from "./services";

export default combineReducers({
    locale,
    contact,
    services
});