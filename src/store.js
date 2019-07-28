import {createStore, combineReducers} from 'redux';
import categoriesReducer from './reducers/categoriesReducer';

const reducers = combineReducers({
  categories: categoriesReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
