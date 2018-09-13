import { combineReducers } from 'redux'
import listview from './listview';
import detailview from './detailview';

export default combineReducers({
  listview,
  detailview,
});