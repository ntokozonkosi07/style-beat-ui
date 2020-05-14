import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthComponent } from './..';
import './login.component.scss';

class loginComponent extends Component {
    
    render() {
        return <div className="loginComponent">
            <div className="login">
                <div>
                    <input placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="forgot__password">
                    <span className="forgot__password_icon"></span>
                    <Link className="forgot__password__link">Forgot password?</Link>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
            <div className="sign_up">
                <Link to="/register">Sign up</Link>
            </div>
        </div>

    }
}

const LoginComponent = AuthComponent(loginComponent); 

export { LoginComponent };