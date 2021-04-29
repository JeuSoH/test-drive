import React, { useContext } from 'react';
import './SignIn.css';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const { loginUser } = useContext(authContext);
    const history = useHistory();

    let userData = {}

    function handleInputChanges(event) {
        userData = {
            ...userData,
            [event.target.name]: event.target.value
        }
    }

    return (
        <div className="sign-in__background">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="sign-in-btn active"> Sign In </h2>
                    <Link to="register"><h2 className="sign-up-btn inactive underlineHover">Sign Up </h2></Link>

                    <div className="fadeIn first">
                        <ExitToAppIcon />
                    </div>

                    <form onSubmit={(event) => loginUser(event, userData, history)}>
                        <input onChange={handleInputChanges} type="text" id="login" className="sign-in-up-input fadeIn second" name="email" placeholder="email" />
                        <input onChange={handleInputChanges} type="text" id="password" className="sign-in-up-input fadeIn third" name="password" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover sign-in-up-subtext" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignIn;