import {
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
} from "../../constants/ActionTypes";

const INIT_STATE = {
    initURL: "",
    authUser: localStorage.getItem("user_id"),
    check: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload,
            };
        }
        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state,
                authUser: null,
                initURL: "/",
            };
        }
        default:
            return state;
    }
};
