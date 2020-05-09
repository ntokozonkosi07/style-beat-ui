import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthComponent } from './..';
import './register.component.scss'

class registerComponent extends Component {
    render(){
        return <div className="registerComponent">
            <div className="register_container">
                <input placeholder="Please enter name." />
                <input placeholder="Please enter last name." />
                <input placeholder="Please enter email" />
                <input type="password" placeholder="Please enter password." />
                <input type="password" placeholder="Please re-enter password." />
                <button>Register</button>
            </div>
            <div className="login_link">
                <Link to="/">Login</Link>
            </div>
        </div>
    }
}

const RegisterComponent = AuthComponent(registerComponent); 

export { RegisterComponent };