import React from 'react';
import classes from './NavigationItems.css'

import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems=()=>(


    //instead of setting active{true} for boolean it would work just setting as active//
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> Burger Builder </NavigationItem>  
        <NavigationItem link="/"> Checkout </NavigationItem>
    </ul>
);




export default navigationItems;