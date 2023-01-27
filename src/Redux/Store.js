import { legacy_createStore as createStore } from "redux";
import statereducer from "./Reducer";
const store=createStore(statereducer)
export default store;
