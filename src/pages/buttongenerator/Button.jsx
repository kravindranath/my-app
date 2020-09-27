import React from 'react';

function Button(_props){
    var props = _props || {},
        className = props.className,
        color = props.color,
        width = props.width,
        backgroundColor = props.backgroundColor,
        borderWidth = props.borderWidth,
        borderStyle = props.borderStyle,
        borderColor = props.borderColor,
        borderRadius = props.borderRadius;

    var styleTag = {
        color           : color,
        width           : width+'px',
        backgroundColor : backgroundColor,
        borderWidth     : borderWidth+'px',
        borderStyle     : borderStyle,
        borderColor     : borderColor,
        borderRadius     : borderRadius+'px'
    };
    return(
        <div>
            <button className={className} style={styleTag}>Button</button>
        </div>
    );
};

export default Button;
