import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

import './password.input.scss';

const PasswordInput = ({ onPasswordChange, className="", placeholder = "Please enter password" }) => {
    const [ value, setValue ] = useState({
        value: '',
        isVisible: false
    });

    const onValueChange = e => {
        const passwordValue = {...value};
        passwordValue.value = e;
        setValue(passwordValue);
        onPasswordChange(e);
    }

    const toggle = isVisible => {
        let passwordValue = {...value};
        passwordValue.isVisible = !isVisible;
        setValue(passwordValue);
    }

    return <div className={`password ${className}`}>
        <div className="password-input">
            <input {...{placeholder}}
                type={value.isVisible? 'text': 'password'} 
                onChange={e => onValueChange(e.target.value)} 
                value={value.value} />
        </div>
        <div className="icon" onClick={e => toggle(value.isVisible)}>
            <FeatherIcon icon={value.isVisible? 'eye': 'eye-off'} />
        </div>
    </div>
}

export {
    PasswordInput
}