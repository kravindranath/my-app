import React from 'react';

function Slider(_props){
    var props = _props || {},
        type = props.type,
        max = props.max,
        min = props.min,
        label = props.label,
        myref = props.myref,
        onChangeHandler = props.onChangeHandler;

    return(
        <div>
            <label className="label" name="label">{label}</label>
            <input type={type} ref={myref} max={max} min={min} onChange={onChangeHandler} />
        </div>
    );
};

export default Slider;
