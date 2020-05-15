import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthComponent } from './..';
import { PasswordInput } from './../../../password-input/password.input';
import './login.component.scss';

class loginComponent extends Component {

    state = {
        email: '',
        password: ''
    }

    onAttributeChanged(prop, value){
        this.setState({ [prop]: value })
    }
    
    render() {
        return <div className="loginComponent">
            <div className="login">
                <div>
                    <input placeholder="Email" onChange={e => this.onAttributeChanged('email', e.target.value)}/>
                </div>
                <div>
                    <PasswordInput 
                        onPasswordChange={e => e && this.onAttributeChanged('password',e)}/>
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