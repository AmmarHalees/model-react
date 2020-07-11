

export const user = (state={}, action)=>{

    switch(action.type){

        case 'CHANGE_AUTH_USER':

            return  action.value;

        default : return state

    }

}