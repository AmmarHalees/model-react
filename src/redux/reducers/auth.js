

export const auth = (state=false, action)=>{

    switch(action.type){

        case 'CHANGE_AUTH_STATE':

            return  action.value;


        default : return state

    }

}   