import React, {Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Fruits from './Fruits/Fruits'
import  './Fruits/Fruits.css'

class App extends Component 

{
   state={
     fruits:[],
     name:"",
     quantity:"",
          
    };
   
  


    submit = () => {
      const { fruits, name } = this.state;
      let newInput = name.split("-");
      fruits.push({name: newInput[0], quantity: newInput[1]});
      this.setState({ fruits, name: '' })
      console.log(this.state.fruits);
      }

 keyPressed=(event)=> {
   if (event.key === "Enter") {
     this.submit();
   }
 }

 deleteFruitHandler=(fruitsIndex)=>{
   const fruits=[...this.state.fruits];
   console.log(fruits);
   console.log(fruits.splice(fruitsIndex,1));
   this.setState({fruits:fruits})
  
 }

 

  updateInput =(event) =>{
    let input = event.target.value;
    this.setState({ name: input });


 }

 render(){
   const style={
     backgroundColor:'white',
     display:'block',
     font:'inherit',
     margin:'auto',
     font:'inherit',
     border:'1px solid blue',
     padding: '9px',
     cursor:'pointer'
   };
   const style2= {
     display: 'table',
     border: '1px solid black',
     width: '50%',
     borderCollapse: 'collapse'
   }

   
   return (
     <div className="App">
       <input id="fruitsquan" type="text" value={this.state.name} onChange={this.updateInput} onKeyDown={this.keyPressed}  ></input>
       <button ref="fruitbutton"
        style={style} onClick={this.submit} >Submit</button>
     <table style={style2}> 
       <tbody>
        
         {this.state.fruits.map((fruit,index) =>{
           return <Fruits 
           click={() => this.deleteFruitHandler(index)}
           name={fruit.name}
           quantity={fruit.quantity}/>
         })}
          
       </tbody>   
     </table> 
      </div>
   )
}
 
}

export default App;
