interface action {
    type: string,
    payload: {}
}

const initialState = {
    data: {}
}

const register = (state = initialState, action: action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

export default register;