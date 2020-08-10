import { CHANGE_AUTH_STATE } from "../constants/constants"
import { CHANGE_AUTH_USER } from "../constants/constants"
import {SET_IS_DESKTOP} from '../constants/constants';



export const handleAuth = (auth_value) =>{

    return {

            type : CHANGE_AUTH_STATE,
            value: auth_value

    }

}


export const handleUser = (user) =>{

    return {

            type : CHANGE_AUTH_USER,
            value: user

    }

}

export const setDesktopViewPortFlag = (isDesktop) =>{

    return {

            type : SET_IS_DESKTOP,
            value: isDesktop

    }

}
