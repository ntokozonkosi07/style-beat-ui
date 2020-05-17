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
        email: { value: '', errors: [] },
        password: { value: '', errors: [] }
    }

    validateProperties(prop, value){
        let attribute = {
            [prop]: { value, errors: [] }
        }

        switch(prop){
            case 'email':
                if(value.length === 0){
                    attribute[prop].errors.push(`Email is required!`);
                }
                break;
            case 'password':
                if(value.length === 0){
                    attribute[prop].errors.push(`Password is required!`);
                }
                break;
            default: break;
        }

        return attribute;
    }

    validateForm = credentials => {
        let valid = true;
        let _credentials = {...credentials};
        Object.keys(credentials).forEach(key => {
            const prop = this.validateProperties(key, credentials[key].value);
            valid = valid && prop[key].errors.length === 0;
            _credentials[key] = {...prop[key]};
        });
        return {valid, credentials: _credentials};
    }

    handleChange

    onAttributeChanged(prop, value){
        const propertyValue = this.validateProperties(prop, value);
        debugger;
        this.setState({ [prop]: { ...propertyValue[prop] } });
    }

    login = e => {
        const { 
            state: { email, password },
            props: { setAuthToken } 
        } = this;

        const { valid, credentials } = this.validateForm({ email, password });

        if(!valid){
            this.setState({ ...credentials });
            return;
        }

        auth.authenticate(email.value, password.value)
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
        const renderValidationError = error => <small>{error}</small>;
        const { email, password } = this.state;
        return <div className="loginComponent">
            <div className="login">
                <div>
                    <div>
                        <input 
                            placeholder="Email" 
                            className={email.errors.length > 0 ? 'error': ''} 
                            onChange={e => this.onAttributeChanged('email', e.target.value)}/>
                    </div>
                    <div>
                        {email && email.errors.map(error => renderValidationError(error))}
                    </div>
                </div>
                <div>
                    <PasswordInput
                        className={password.errors.length > 0 ? 'error' : ''}
                        onPasswordChange={e => this.onAttributeChanged('password', e)} />
                    <div>
                        {password && password.errors.map(error => renderValidationError(error))}
                    </div>
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