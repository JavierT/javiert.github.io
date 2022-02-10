import {combineReducers} from "redux";

// Reducers
import wayPointReducer from "./waypointReducer";

export default combineReducers({
    waypoints: wayPointReducer,
})