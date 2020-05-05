//will be rendered to the screen//

import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient.js'



const burger=(props)=>
{
    let transformedIngredients=Object.keys(props.ingredients)   //from burgerbuilder(only array keys, as ingredients in builder is an object so we need to convert it into an array)
    .map(igkey=>
        {
        return [...Array(props.ingredients[igkey])].map((_,i) =>     //igkey=salad and i will b 1,2,3 will be having unique key everytime//
        {
             return <BurgerIngredient key={igkey+i} type={igkey} />
        })
    
    
    })
    .reduce((arr,el)=>
    {
        return arr.concat(el);
    },[]);                       //[] can accept null if wanted//

    if(transformedIngredients.length===0)
    {
        transformedIngredients=<p> Please add ingredients! </p>
    }
    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />

            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />

           

        </div>

    );
}
export default burger;