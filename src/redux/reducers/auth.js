

export const auth = (state=true, action)=>{

    switch(action.type){

        case 'CHANGE_AUTH_STATE':

            return  action.value;


        default : return state

    }

}   