import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    SIGNIN_USER,
    SIGNOUT_USER,
} from "../../constants/ActionTypes";
import {
    userSignInSuccess,
    userSignOutSuccess
} from "../../appRedux/actions/Auth";
// import axios from "../../config/axios";


const signInUserWithEmailPasswordRequest = async (payload) => {
    if (payload[0] === 'shabkhaizmughal@gmail.com' && payload[1] === '123456') {
        return true;
    }
    else {
        return false;
    }
    // return axios
    //     .post("api/auth/login", payload)
    //     .then((response) => response)
    //     .catch((err) => {
    //         if (err && err.response.data) {
    //             return err.response;
    //         }
    //     });
};



function* signInUserWithEmailPassword({ payload }) {
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, payload);
        if (signInUser) {
            localStorage.setItem("user_id", payload[0]);
            yield put(userSignInSuccess(payload[0]));
            console.log('Login Successfull')

        } else {
            console.log('Incorrect Credentials')
        }
    } catch (error) {
    }
}

function* signOut() {
    try {
        yield put(userSignOutSuccess("SignOut"));
        localStorage.removeItem("user_id");
    } catch (error) {
    }
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([
        fork(signInUser),
        fork(signOutUser),
    ]);
}
