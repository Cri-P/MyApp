const LoginReducer = (state = {isEnable: false}, action) => {
    switch (action.type){
        case "SET_IS_ENABLE":
            return Object.assign({}, state, {
                isEnable: action.payload,
            });
        default:
            return state;
    }
};

export default LoginReducer;