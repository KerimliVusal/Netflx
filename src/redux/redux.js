import {createStore,combineReducers} from 'redux'
import currentPageReducer from './CurrentPageReducer';
const reducers=combineReducers({
  currentPageReducer
})

function configureStore(){
  return createStore(reducers)
}

export default configureStore;