import React from 'react';
import classes from './BuildControl.css';

const buildControl=(props)=>
(
    <div className={classes.Buildcontrol}>
    <div className={classes.Label}>{props.label} </div>

    <button 
    className={classes.Less} 
    onClick={props.removed} 

    //disable is the property in html to disable it//
    disabled={props.disabled}>Less</button>         

    <button
     className={classes.More} 
     onClick={props.added}> More</button>
    </div>
)



export default buildControl;