interface action {
    type: string
};

const initialState = {
    page : true
};

const authPageLoader = (state = initialState, action: action) => {
    switch (action.type) {
        case "SIGNIN_PAGE":
            return {
                ...state,
                page : true
            };
        case "SIGNUP_PAGE":
            return {
                ...state,
                page : false
            };
        default:
            return state;
    }
}

export default authPageLoader;