import { CHANGE_AUTH_STATE } from "../constants/constants"



export const handleauth = (auth_value) =>{

    return {

            type : CHANGE_AUTH_STATE,
            value: auth_value

    }

}