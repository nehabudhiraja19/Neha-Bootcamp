import React,{Component} from 'react';
import Aux from '../../../hoc/Aux.js'
import Button from '../../UI/Button/Button.js';

class OrderSummary extends Component
{
    componentWillUpdate()
    {
        console.log("Component will update in ordersummary!")
    }
    render()
    {
    const ingredientSummary=Object.keys(this.props.ingredients)     //ingredients are in objecct format so used object.keys to transform into arrays of keys//
    .map(igkey=>{
                 return (
                 <li key={igkey}>   
                      <span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
                      
                      </li>);                                                         //here igkey is salad and ingrediemts[igkey] is value//                                          //want ingredients in the form of list
    });
  
        return(
            <Aux>
        
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price:{this.props.price.toFixed(2)}</strong>  </p>
            <p> Continue to checkout? </p>
    
            
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>    
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>    
    
    
            
            </Aux>

        );
    }
} 
  
    //btnType has be exact as mentioned in css in form of danger and success//


       




export default OrderSummary;