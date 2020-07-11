import { combineReducers } from "redux";
import {auth} from './auth';
import {user} from './user';
import {theme} from './theme';



export const rootReducer =combineReducers({

    auth,
    user,
    theme
  
  })
  