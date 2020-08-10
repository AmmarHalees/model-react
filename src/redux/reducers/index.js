import { combineReducers } from "redux";
import {auth} from './auth';
import {user} from './user';
import {theme} from './theme';
import {viewport} from './viewport';



export const rootReducer =combineReducers({

    auth,
    user,
    theme,
    viewport

  })
  