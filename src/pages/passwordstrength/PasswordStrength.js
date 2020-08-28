import React, { useState, useRef } from 'react';
import '../../css/main.css';
import './pwdhelper.css';

function PasswordStrength(){

    const calculateStrength = (_val) => {
        var val     = _val || '';
        var hasDigit = val.match(/[0-9]/g);
        var hasCapital = val.match(/[A-Z]/g);
        var hasSpecial = val.match(/(\W)/g);
        var defVal = 'weak';

        if(val.length < 5){
            return defVal;
        }

        if(hasDigit && hasCapital && hasSpecial) {
            defVal = 'strong';
        }else if (hasDigit || hasCapital || hasSpecial) {
            defVal = 'medium';
        };
        return defVal;
    }

    var initialState = {
        strength: '----',
        value: ''
    };

    let [currState, setState ] = useState(initialState);

    const onChangeHandler = () => {
        var val = inpRef.current.value;
        var strength = calculateStrength(val);
        setState({ strength: strength, value: val });
    };

    let inpRef  = useRef(null);

    return(
        <div>
            <h1>Password Strength</h1>
            <div className={`pwd-helper ${currState.strength}`}>
                <input onChange={onChangeHandler} ref={inpRef} className="inputField" placeholder="Type a strong password" />
                <div className="stglbl">{currState.strength}</div>
            </div>
        </div>
    );
}

export default PasswordStrength;