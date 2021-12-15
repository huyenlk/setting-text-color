import { sortBy } from "lodash";
import { createStore } from "redux";
import { status, sort } from "./Actions/index";
import myReducer from "./Reducers/index";


const store = createStore(myReducer);
console.log('Default:', store.getState());
store.dispatch(status());

console.log('TOGGLE_STATUS:', store.getState());

store.dispatch(sort({
  by : 'name',
  value: -1
}));
console.log('SORT:', store.getState());