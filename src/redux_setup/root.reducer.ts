import {  combineReducers } from "redux";
import { dummyReducerFunc, DummyState } from '../modules/dummy/dummy.reducer';

// Here we'll define how the app's state will look
export type AppState = {
    dummy: DummyState
    // ...
}

// This will combine reducers from each module
export default combineReducers({
    dummy: dummyReducerFunc,
    // ...
});
