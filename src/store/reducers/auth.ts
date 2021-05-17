interface action {
    type: string
};

const intialState = {
    status: false
};

const isAuth = ( state = intialState, action: action ) => {
    switch ( action.type ) {
        case "SIGN_IN":
            return {
                ...state,
                status: true
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