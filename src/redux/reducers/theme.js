

export const theme = (state = "light", action) => {

    if (action.type === 'SET_USER') {

        return action.value

    } else {

        return state

    }

}