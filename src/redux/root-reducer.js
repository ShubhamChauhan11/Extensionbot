import { commonreducer } from "./reducer";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    commonreducer: commonreducer,
})
export default rootReducer