import React from 'react';
import classes from './Button.css';





const button=(props)=>(
    <button
    className={[classes.Button,classes[props.btnType]].join(' ')}   //btn type will be set from outside that can be either danger or success//
    onClick={props.clicked}>
        {props.children}
    </button>
);



export default button;