import React from 'react';
import Slider from './Slider';
import Button from './Button';

import './default.css';

const ATTR_MAP = {
    'backgroundColor' : 'background-color',
    'borderWidth' : 'border-width',
    'borderStyle' : 'border-style',
    'borderColor' : 'border-color',
    'borderRadius' : 'border-radius',
    'width' : 'width'
};

class ButtonGenerator extends React.Component{
    constructor(){
        super();
        this.Slider = null;
        this.borderRef = React.createRef();
        this.backRef = React.createRef();
        this.borderColorRef = React.createRef();
        this.borderRadiusRef = React.createRef();
        this.widthRef = React.createRef();
        this.state = {
            color: 'white',
            borderWidth: 0,
            backgroundColor: 'gray',
            borderStyle: 'solid',
            borderColor: 'yellow',
            borderRadius: '0px',
            width: '120px'
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
            backgroundVal = this.backRef.current.value,
            borderColorVal = this.borderColorRef.current.value,
            widthVal = this.widthRef.current.value,
            borderRadiusVal = this.borderRadiusRef.current.value;

        this.setState({
            borderWidth : borderWidthVal,
            borderColor : borderColorVal,
            borderRadius : borderRadiusVal,
            width : widthVal,
            backgroundColor : backgroundVal
        })
    }

    render() {

var backgroundColor = this.state.backgroundColor,
    color = this.state.color,
    borderColor = this.state.borderColor,
    borderStyle = this.state.borderStyle,
    borderWidth = this.state.borderWidth,
    width = this.state.width,
    borderRadius = this.state.borderRadius;

        return (
            <div className="default-block">
                <div className="left-block">
                    <div className="row">
                        <Slider
                            key="borderWidth"
                            type="range"
                            myref={this.borderRef}
                            label="Border Width"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                            min={0}
                            max={10}
                            val={borderWidth}
                        />
                    </div>
                    <div className="row">
                        <Slider
                            key="borderRadius"
                            type="range"
                            myref={this.borderRadiusRef}
                            label="Border Radius"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                            min={0}
                            max={50}
                            val={borderRadius}
                        />
                    </div>
                    <div className="row">
                        <Slider
                            key="borderColor"
                            type="Color"
                            myref={this.borderColorRef}
                            label="Border Color"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                        />
                    </div>
                    <div className="row">
                        <Slider
                            key="width"
                            type="range"
                            myref={this.widthRef}
                            label="Width"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                            min={120}
                            max={250}
                            val={width}
                        />
                    </div>
                    <div className="row">
                        <Slider
                            key="backgroundColor"
                            type="color"
                            myref={this.backRef}
                            label="Background Color"
                            onChangeHandler={this.onChangeHandler.bind(this)}
                        />
                    </div>
                </div>
                <div className="right-block">
                    <div className="row button-block">
                        <Button className="noStyle"
                            color={color}
                            width={width}
                            backgroundColor={backgroundColor}
                            borderColor={borderColor}
                            borderStyle={borderStyle}
                            borderWidth={borderWidth}
                            borderRadius={borderRadius}
                        />
                    </div>
                    <div className="row code-block">
                        <h3>CSS Style</h3>
                        <code>
                            <pre>
                                {`
.myButton {
    ${ATTR_MAP['backgroundColor']} : ${backgroundColor};
    ${ATTR_MAP['width']}            : ${width};
    ${ATTR_MAP['borderWidth']}     : ${borderWidth}px;
    ${ATTR_MAP['borderStyle']}     : ${borderStyle};
    ${ATTR_MAP['borderColor']}     : ${borderColor};
    ${ATTR_MAP['borderRadius']}    : ${borderRadius}px;
}
                                `}
                            </pre>
                        </code>
                    </div>
                </div>
            </div>
        );
    }

}

export default ButtonGenerator;
