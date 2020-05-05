import React from 'react';
import classes from'./BuildControls.css'
import BuildControl from './BuildControl/BuildControl.js'
//import { checkPropTypes } from 'prop-types';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},


];

const buildcontrols=(props)=>(



    <div className={classes.BuildControls}>
    
        <p> Current price:<strong>{props.price.toFixed(2)}</strong></p>    
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}    //to check the type of ingredient//
            removed={()=> props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}  //will check if salad:true, meat:false, so as to disable it//
            
            />
        ))}

            <br></br>
        <button className={classes.OrderButton}

        //it is disabled as when purchasable is false//
        disabled={!props.purchasable}
        onClick={props.ordered} > ORDER NOW </button>    

    </div>

);

export default buildcontrols;