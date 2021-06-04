interface action {
    type: string
    payload: {}
};

const intialState = {
    data: {}
};

const isAuth = ( state = intialState, action: action ) => {
    switch ( action.type ) {
        case "SIGN_IN":
            return {
                ...state,
                data: action.payload
            };
        case "SIGN_OUT":
            return {
                ...state,
                status: false
            };
        default:
            return state;
    }
};

export default isAuth;