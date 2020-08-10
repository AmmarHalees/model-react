
export const viewport = (state=true, action)=>{

    switch(action.type){

        case 'SET_IS_DESKTOP':

            return  action.value;

        default : return state

    }

}