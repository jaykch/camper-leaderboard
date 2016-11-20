import { combineReducers } from "redux"

import sampleReducer from "./sampleReducer"
import sampleReducer2 from "./sampleReducer2"

export default combineReducers({
    sampleReducer,
    sampleReducer2
})