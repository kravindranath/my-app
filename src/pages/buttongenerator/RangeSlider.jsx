import React from 'react';

function RangeSlider(_props){
    var props = _props || {},
        max = props.max,
        min = props.min,
        label = props.label,
        propName = props.propName,
        val = props.val,
        myref = props.myref,
        onChangeHandler = props.onChangeHandler,
        smlbl;

    if(propName === 'borderWidth'){
        smlbl = 'px'
    }else if(propName === 'backgroundColor'){
        smlbl = '#'
    }
    return(
        <div>
            <label name="label">{label} {val}{smlbl}</label>
            <input ref={myref} type="range" max={max} min={min} onChange={onChangeHandler} />
        </div>
    );
};

export default RangeSlider;
