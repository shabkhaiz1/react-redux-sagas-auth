import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    userSignOut
} from "../appRedux/actions/Auth";

export const LoggedIn = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h2>We are LoggedIn Now</h2>
            </div>
            <button onClick={() => dispatch(userSignOut())}>Logout</button>
        </>
    );
}

export default LoggedIn;