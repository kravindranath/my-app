import React, { createRef } from 'react';
import RangeSlider from './RangeSlider';

import './default.css';

class ButtonGenerator extends React.Component{
    constructor(){
        super();
        this.onChangeHandler = this.onChangeHandler;
        this.RangeSlider = null;
        this.borderRef = React.createRef();
        this.backRef = React.createRef();
        this.state = {
            color: 'white',
            borderWidth: 0,
            backgroundColor: 'black'
        }
    }

    capitalize(str){
        if(str.length) {
            let first = str.charAt(0).toUpperCase(),
            last = str.substr(1, str.length);
            return `${first}${last}`;
        }
    }

    onChangeHandler(e){
        var borderWidthVal = this.borderRef.current.value,
            backgroundVal = this.backRef.current.value;

        console.log(borderWidthVal, backgroundVal);

        this.setState({
            borderWidth : borderWidthVal,
            backgroundColor : backgroundVal
        })
    }

    render() {
        var prop_border = 'borderWidth';
        var prop_background = 'backgroundColor';
        return (
            <div className="default-block">
                <div className="left-block">
                    <div className="row">
                        <RangeSlider
                            myref={this.borderRef}
                            label={this.capitalize('borderWidth')}
                            propName={prop_border}
                            key="a"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                            min={1}
                            val={this.state.borderWidth}
                            max={5}
                        />
                    </div>
                    <div className="row">
                        <RangeSlider
                            myref={this.backRef}
                            label={this.capitalize('backgroundColor')}
                            propName={prop_background}
                            onChangeHandler={this.onChangeHandler.bind(this)}
                            key="b"
                            min={1}
                            max={100}
                        />
                    </div>
                </div>
                <div className="right-block">
                    <button className="noStyle" style={{...this.state}}>Button</button>
                </div>
            </div>
        );
    }

}

export default ButtonGenerator;
