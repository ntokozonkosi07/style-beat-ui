import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthComponent } from './..';
import { auth as authService } from './../../../../services/Auth.service';
import { emailRegex, passwordRegex } from './../../../../constants';
import './register.component.scss'

class registerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let attribute = {
            [name]: { value, errors: [] }
        }

        attribute[name].errors = [];
        switch (name) {
            case 'name':
                if (value.length === 0) {
                    attribute[name].errors.push(`Name is required!`); break;
                }
                break;
            case 'lastName':
                if (value.length === 0) {
                    attribute[name].errors.push(`Last name is required!`); break;
                }
                break;
            case 'email':
                if (value.length === 0) {
                    attribute[name].errors.push(`Email is required!`); break;
                }
                if(!emailRegex.test(value)){
                    attribute[name].errors.push(`Email is invalid!`); break;
                }
                break;
            case 'password':
                if (value.length === 0) {
                    attribute[name].errors.push(`Password is required!`); break;
                }
                if(!passwordRegex.test(value)){
                    attribute[name].errors.push(`Password must contain at least 1 lowercase alphabetical character`);
                    attribute[name].errors.push(`Password must contain at least 1 uppercase alphabetical character`); 
                    attribute[name].errors.push(`Password must contain at least 1 numeric character`); 
                    attribute[name].errors.push(`Password must contain at least 1 special character`); 
                    attribute[name].errors.push(`Password must must be 8 characters or longer`); 
                    break;
                }
                break;
            case 'confirmPassword':
                if (value.length === 0) {
                    attribute[name].errors.push(`Confirm password is required!`); break;
                }
                if(this.state.user.password.value !== value){
                    attribute[name].errors.push(`Passwords do not match!`); break;
                }
                break;
            default: break;
        }

        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                ...attribute
            }
        });
        debugger;
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        // authService.registerUser(user).then(res => {
        //     debugger;
        // }, error => {
        //     debugger;
        // })
    }


    render() {
        const { user } = this.state;

        return <div className="registerComponent">
            <form onSubmit={this.handleSubmit} noValidate className="register_container">
                <div>
                    <div>
                        <input placeholder="Please enter name." name="name" className={user.name && user.name.errors.length > 0 ? 'error': ''} onChange={this.handleChange} />
                    </div>
                    <div>
                        {user.name && user.name.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                <div>
                    <div>
                        <input placeholder="Please enter last name." name="lastName" className={user.lastName && user.lastName.errors.length > 0 ? 'error': ''} onChange={this.handleChange} />
                    </div>
                    <div>
                        {user.lastName && user.lastName.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                <div>
                    <div>
                        <input placeholder="Please enter email" name="email" email="true" className={user.email && user.email.errors.length > 0 ? 'error': ''} onChange={this.handleChange} />
                    </div>
                    <div>
                        {user.email && user.email.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                <div>
                    <div>
                        <input type="password" placeholder="Please enter password." className={user.password && user.password.errors.length > 0 ? 'error': ''}  name="password" onChange={this.handleChange} />
                    </div>
                    <div>
                        {user.password && user.password.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                <div>
                    <div>
                        <input type="password" placeholder="Please re-enter password." className={user.confirmPassword && user.confirmPassword.errors.length > 0 ? 'error': ''}  name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <div>
                        {user.confirmPassword && user.confirmPassword.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                
                <button type="submit">Register</button>
            </form>
            <div className="login_link">
                <Link to="/">Login</Link>
            </div>
        </div>
    }
}

const RegisterComponent = AuthComponent(registerComponent);

export { RegisterComponent };