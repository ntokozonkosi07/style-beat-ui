import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthComponent } from './..';
import { PasswordInput } from './../../../password-input/password.input';
import { auth } from './../../../../services/Auth.service';
import { setAuthToken } from './../../../../redux';
import './login.component.scss';

class loginComponent extends Component {

    state = {
        email: '',
        password: ''
    }

    onAttributeChanged(prop, value){
        this.setState({ [prop]: value });
    }

    login = e => {
        const { 
            state: { email, password },
            props: { setAuthToken } 
        } = this;

        auth.authenticate(email, password)
            .then(({headers}) => {
                debugger;
                const token = headers['authorization'];
                setAuthToken(token);
                this.props.history.push(`/`)
            }, error => {
                debugger;
            })
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
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
            <div className="sign_up">
                <Link to="/register">Sign up</Link>
            </div>
        </div>

    }
}

const LoginComponent = connect(null, { setAuthToken })(AuthComponent(loginComponent)); 

export { LoginComponent };