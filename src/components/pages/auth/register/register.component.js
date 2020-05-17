import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { AuthComponent } from './..';
import { auth as authService } from './../../../../services/Auth.service';
import { emailRegex, passwordRegex } from './../../../../constants';
import { PasswordInput } from './../../../../components/password-input'
import './register.component.scss'

class registerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: {
                name: { value: '', errors: [] },
                lastName: { value: '', errors: [] },
                email: { value: '', errors: [] },
                password: { value: '', isPassVisible: false, errors: [] },
                confirmPassword: { value: '', isPassVisible: false, errors: [] }
            }
        }
    }

    validateSchema(name, value){
        let attribute = {
            [name]: { value, errors: [] }
        }

        switch (name) {
            case 'name':
                if (value.length === 0) {
                    attribute[name].errors.push(`Name is required!`);
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

        return attribute;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        
        const property = this.validateSchema(name, value);
        
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                ...property
            }
        });
    }
    
    validateForm = (user) => {
        let valid = true;
        let _user = {...user};
        Object.keys(user).forEach(key => {
            const prop = this.validateSchema(key, user[key].value);
            valid = valid && prop[key].errors.length === 0;
            _user[key] = {...prop[key]};
        });
        return {valid, user: _user};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({...this.state,isLoading:true});
        const { user } = this.state;

        const {valid, user: vaidatedUser} = this.validateForm(user);
        
        if(!valid){
            this.setState({ user: vaidatedUser });
            return;
        }

        const payload = {
            name: user.name.value,
            lastName: user.lastName.value,
            email: user.email.value,
            password: user.password.value
        }
        
        authService.registerUser(payload)
        .then(res => {
            // no point of the line of code below
            // this.setState({...this.state, isSuccess: true});
            this.props.history.push(`/`)
        }, error => {
            const {name, lastName, email, password, confirmPassword} = this.state.user;
                this.setState({
                    ...this.state, user: {
                        name: { ...name, value: '' },
                        lastName: { ...lastName, value: '' },
                        email: { ...email, value: '' },
                        password: { ...password, value: '' },
                        confirmPassword: { ...confirmPassword, value: '' }
                    }, isSuccess: false
                });
        })
        .finally(() => this.setState({...this.state,isLoading:false}))
    }


    render() {
        const { user } = this.state;

        const resultsMessage = (msg, isSuccess=false) => {
            return <div className={`notification ${ isSuccess ? 'success': 'error'}`}>
                <p>{msg}</p>
            </div>
        }
        
        return <div className="registerComponent">
            
            <form onSubmit={this.handleSubmit.bind(this)} noValidate className="register_container">
                {
                    this.state.isSuccess &&
                    resultsMessage(this.state.isSuccess ? "User created successfully.": "User cannot be created!",this.state.isSuccess)
                }
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
                    <PasswordInput 
                        className={user.password && user.password.errors.length > 0 ? 'error': ''}
                        onPasswordChange={value =>this.handleChange({target:{name:'password',value}})}/>
                    <div>
                        {user.password && user.password.errors.map(error => <small>{error}</small>)}
                    </div>
                </div>
                <div>
                    <PasswordInput 
                        placeholder="Please confirm password"
                        className={user.confirmPassword && user.confirmPassword.errors.length > 0 ? 'error': ''}
                        onPasswordChange={value => this.handleChange({target: {name:'confirmPassword',value}})}/>
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