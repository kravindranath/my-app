
import React from 'react';

function ToggleButton (props) {

    const mode = props.mode || 'light',
        onClickHandle = props.onClickHandle,
        className = `${mode} ${props.className}`,
        switchClassName = `switch`
        ;

    return (
        <div className={className} onClick={onClickHandle}>
            <span className={switchClassName}>{mode}</span>
        </div>
    )
}


export default ToggleButton;