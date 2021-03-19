import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import {
    userSignIn
} from "../appRedux/actions/Auth";
import { RootState } from 'typesafe-actions';
import { LoggedIn } from './LoggedIn'

// type Props = {
//     children: typeof LoggedIn;
// }


const Auth = () => {
    const dispatch = useDispatch();
    const { authUser } = useSelector((state: RootState) => state.auth);
    const [user, setUser] = useState(false);

    //     onSubmit = {(e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     const target = e.target as typeof e.target & {
    //         email: { value: string };
    //         password: { value: string };
    //     };
    //     const email = target.email.value; // typechecks!
    //     const password = target.password.value; // typechecks!
    //     debugger
    //     dispatch(userSignIn(target));
    // }}
    // const child = children.map((i) => {
    //     return (i)
    // });

    useEffect(() => {
        debugger
        if (authUser !== null) {
            setUser(true);
            console.log('User LoggedIn')
        }
        else {
            setUser(false);
        }
    });

    const handleSubmit = (event: any) => {
        let values = [
            event.target.elements.email.value,
            event.target.elements.password.value,
        ];
        dispatch(userSignIn(values));
    };

    return (
        <>{user ? (
             <LoggedIn/> 
            // {children}
        ) :

            <Form
                onSubmit={handleSubmit}
            >
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="Email" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="Password" placeholder="Enter Password" />
                </FormGroup>
                <Input type="submit" value="Submit" />
            </Form>
        }
        </>
    );
}

export default Auth;