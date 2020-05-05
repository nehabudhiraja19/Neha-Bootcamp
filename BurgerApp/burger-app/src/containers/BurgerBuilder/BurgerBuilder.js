import React,{Component} from 'react'
import Aux from '../../hoc/Aux.js'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js'


const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends Component
{

    state={

        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,          //base price without any ingredients//
        purchasable:false,
        purchasing:false     //as ordernow button clicked it should be set to false//
    }

    updatePurchaseState(ingredients)
    {
        // const ingredients={                      //as when updating itbe getting an outdated so instead we passes the argument as ingredients
        //     ...this.state.ingredients            //to create a copy of ingredients//
        // };
         const sum=Object.keys(ingredients)        //we got keys to et values we need to map//
        .map(igkey=>
            {
                return ingredients[igkey];         //return the amount
            })
            .reduce((sum,el)=>
            {
                return sum+el   ;      //sum is the final result and el is the number that is accessed in ingredients[igkey]
            },0)                              // it is 0 if no number present or ingredients added//
            
            this.setState({purchasable: sum>0})
    }

    purchasehandler=()=>
    {
        this.setState({purchasing:true});
    }

    purchaseContinueHandler=()=>
    {
        alert('You can continue!');
    }

    purchaseCancelhnadler=()=>           //to close the backdrop as no purchasing
    {
        this.setState({purchasing:false})
    }


    addIngredientHandler=(type)=>
    {
        const oldCount=this.state.ingredients[type];         //to take the count of previous ingredient//
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);  //we passes argument to update with the new array

    }


    removeIngredientHandler=(type)=>
    {
        const oldCount=this.state.ingredients[type];         //to take the count of previous ingredient//
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients,});
        this.updatePurchaseState(updatedIngredients);

    }




    render()                           //to tell react what to render on the dom//
    {
        const disabledInfo={
            ...this.state.ingredients               //copied ingredients in an immutable way//
        };
        for ( let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]<=0                   //here key will be the values ,the quantity of the ingredient//
        }
//modal should be shown only if purchasing:true

        return(                        // to return the jsx code//
             <Aux>                                     
            
               <Modal show={this.state.purchasing}  modalClosed={this.purchaseCancelhnadler}>                 
               <OrderSummary 
               ingredients={this.state.ingredients}
               price={this.state.totalPrice}
               purchaseCancelled={this.purchaseCancelhnadler}
               purchaseContinued={this.purchaseContinueHandler}
               />           
               </Modal>
               <Burger ingredients={this.state.ingredients}></Burger>  

               <BuildControls
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
               disabled={disabledInfo}
               purchasable={this.state.purchasable}
               ordered={this.purchasehandler}
               price={this.state.totalPrice}
               />            
            </Aux>
        );          
      }
}


export default BurgerBuilder;