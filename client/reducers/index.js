
// import destructured combineReducers from redux
import { combineReducers } from 'redux';

// import my application's reducers
import challengesReducer from './challengesReducer';

// combine reducers by invoking combineReducers and store in const reducers
const reducers = combineReducers({
  challenges: challengesReducer,
});

// expert reducers const
export default reducers;
