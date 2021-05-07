import { combineReducers } from "redux";
import { isAuthReducer } from "./isAuth";

const rootReducer = combineReducers({
	isAuthReducer,
});

export default rootReducer;
