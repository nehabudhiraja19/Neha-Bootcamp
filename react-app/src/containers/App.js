 import React, { Component } from 'react';
 //import style from 'styled-components'
//import React,{useState} from 'react';

import './App.css';
//import Radium,{StyleRoot} from 'radium';

import Persons from '../components/Persons/Persons';
import {StyledButton} from '../components/Persons/Person/StyledComponent.js';
import AuthContext from '../context/auth-context'

//import WithClass from '../hoc/WithClass'

//import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
// const App=props=>
// {
//    const [personPreviousState,personUpdatedState]=useState(
//     {
//       persons:
//     [
//       {name:"Neha", age:28},
//       {name:"Ashu",age:12},
//       {name:"Savita",age:45}
//     ]
//     }
//   );
//   const switchHandler=()=>
//     {
//      // console.log("clicked")
//      personUpdatedState({
//       persons:
//       [
//         {name:"Nehaaaaa", age:28},
//         {name:"Ashuuuuu",age:12},
//         {name:"Savitaaaaaa",age:45}
//       ]
  
//      }
//      );
//     };
    
  
//   return (
//           <div className="App">
    
//            <h2> Hi I am react app</h2>
//            <p> Hello react!</p>
//            <button onClick={switchHandler}> Switch </button>


//            <Person/>
//         <Person name={personPreviousState.persons[0].name} age={personPreviousState.persons[0].age}/>
//         <Person name={personPreviousState.persons[1].name} age={personPreviousState.persons[1].age}/>
//         <Person name={personPreviousState.persons[2].name} age={personPreviousState.persons[2].age}/>
//            </div>

//   )
// }

// export default App;

class App extends Component
{
 
   constructor(props)
   {
     super(props);
     console.log('[App.js] constructor');
   }
 

  state={
    persons:
    [
      {id:'name1' ,name:"Neha", age:28},
      {id:'name2',name:"Ashu",age:12},
      {id:'name3',name:"Savita",age:45}
    ],
    showPersons:false,
    changeCounter:0,
    authenticated:false

  }


   static getDerivedStateFromProps(props,state)
   {
     console.log('In [App.js] getDerivedState constructor',props);
     return state;
   }


   componentDidMount()
   {
     console.log('I will run http request[componentDidMount]');
   }

   shouldComponentUpdate(nextProps,nextState)
   {
     console.log('In [App.js] shouldComponentUpdate');
     return true;  //if set to false then wont allow the button to show persons
   }

   componentDidUpdate()
   {

    console.log('In [App.js] componentDidUpdate');
   }
  // switchHandler=()=>
  // {
  //  // console.log("clicked")
  //  this.setState({
  //   persons:
  //   [
  //     {name:"Nehaaaaa", age:28},
  //     {name:"Ashuuuuu",age:12},
  //     {name:"Savitaaaaaa",age:45}
  //   ]

  //  }

  //  )
  // }



  switchHandler=(newName)=>
  {
   // console.log("clicked")
   this.setState({
    persons:
    [
      // {name:"Nehaaaaa", age:28},
      {name:newName, age:28},
      {name:"Ashuuuuu",age:12},
      {name:"Savitaaaaaa",age:45}
    ],
    //showPersons:false,
    
   }

   )
  }
  // switchNameHandler=(event)=>
  // {
  //   this.setState({
  //     persons:
  //     [
  //       // {name:"Nehaaaaa", age:28},
  //       {name:"Neha", age:28},
  //       {name:event.target.value,age:12},
  //       {name:"Savitaaaaaa",age:45}
  //     ]
  
  //    }
  
  //    )
  // }


  switchNameHandler=(event, id)=>
  {

    const personIndex=this.state.persons.findIndex(p=>{

      return p.id===id;
    });

    const person=
    {
      ...this.state.persons[personIndex]
    }

    person.name=event.target.value

    const persons=[...this.state.persons];
    persons[personIndex]=person;


  //   this.setState({
  //     persons:persons,
  //     changeCounter:this.state.changeCounter +1
  //   })
  // }


  this.setState((prevState,props)=>
  {
    return {
      persons:persons,
    changeCounter:this.state.changeCounter +1
  }
    });
    
};
  //   this.setState({
  //     persons:
  //     [
  //       // {name:"Nehaaaaa", age:28},
  //       {name:"Neha", age:28},
  //       {name:event.target.value,age:12},
  //       {name:"Savitaaaaaa",age:45}
  //     ]
  
  //    }
  
  //    )
  // }


  deletePersonHandler=(PersonIndex)=>
  {
    const persons=this.state.persons;
    persons.splice(PersonIndex,1);
    this.setState({persons:persons})

  }


  personToggleHandler=()=>
  {
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  
  loginHandler=()=>
  {
    this.setState({authenticated:true});
  }


  render() 
  {

    console.log('In [App.js] render method');
    // const style={
    //   backgroundColor:'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':
    //   {
    //     backgroundColor:'lightgreen',
    //     color:'black'

    //   }



  //  };

    let personsnew=null;
    if(this.state.showPersons)
    {
       personsnew=
     (
        <div>

          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler}
          isAuthenticated={this.state.authenticated}
          />

        
          {/* {this.state.persons.map((person,index)=>
            {

              return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.switchNameHandler(event,person.id)}
              />
              
            })} */}
            )
        </div>





    //   <div>
    // <Person/>
    //     <Person 
    //     name={this.state.persons[0].name}
    //      age={this.state.persons[0].age}/>

    //     <Person
    //      name={this.state.persons[1].name}
    //       age={this.state.persons[1].age}
    //       // click={this.switchHandler}
    //       click={this.switchHandler.bind(this,"Changed")}
    //       changed={this.switchNameHandler}
    //       />


    //     <Person 
    //     name={this.state.persons[2].name} 
    //     age={this.state.persons[2].age}/>
    //        </div>      

     );
    //  style.backgroundColor='red';

    //  style[':hover']=
    //   {
    //     backgroundColor:'salmon',
    //     color:'black'

    //   }
      }
 //let classes=['red','bold'].join(' ') //red bold//
      const classes=[]
      if(this.state.persons.length<=2)
      {
        classes.push('red'); //classes=['red']
      }
      if(this.state.persons.length<=1)
      {
        classes.push('bold');  //classes=['red','bold']
      }


    return (
      //  <StyleRoot>
       <div className="App">

      {/* <WithClass classes="App"> */}

     {/* </div><div className={classesn.App}>  */}

    <h2>{this.props.appTitle}</h2>
       {/* <p className={classes}> Hello react!</p> */}

       <p className={classes.join(' ')}> Hello react!</p>

       <AuthContext.Provider value=
       {{authenticated:this.state.authenticated,
       login:this.loginHandler}}>
        <StyledButton
        
         alt={this.state.showPersons} 
      
      //  style={style}
      //  onClick={()=>this.switchHandler('sanjay')}> Switch </button>

      onClick={this.personToggleHandler}> Switch </StyledButton>

      <AuthContext.Consumer>
        {context=> <StyledButton onClick ={context.login}> Login Button </StyledButton>}

      </AuthContext.Consumer>
      {personsnew}
      </AuthContext.Provider>

       
       </div> 
       
       
        /* </StyleRoot>   */
    );


//  {/* <Person/>
//        <Person name="Neha" age="23"/>
//        <Person name="Ashu" age="22"> My hobbies:racing </Person> */ }





      //  {/* <Person/>
//         <Person 
//         name={this.state.persons[0].name}
//          age={this.state.persons[0].age}/>

//         <Person
//          name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           // click={this.switchHandler}
//           click={this.switchHandler.bind(this,"Changed")}
//           changed={this.switchNameHandler}
//           />


//         <Person 
//         name={this.state.persons[2].name} 
//         age={this.state.persons[2].age}/>
//            </div>

//      );
//       }
//     }



//  */}





  //this.state.showPersons===true ?
//  <div>
//     <Person/>
//         <Person 
//         name={this.state.persons[0].name}
//          age={this.state.persons[0].age}/>

//         <Person
//          name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           // click={this.switchHandler}
//           click={this.switchHandler.bind(this,"Changed")}
//           changed={this.switchNameHandler}
//           />


//         <Person 
//         name={this.state.persons[2].name} 
//         age={this.state.persons[2].age}/>
//            </div>:null
//   }
//            </div>

//      );
//       }
//     }
  //return React.createElement('div',null,'h1','Hi I am react app!!!');// dint work as h1 was not rendered//

 // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this work???'));
  // }

// }
// }

  


}
  }

 export default App;
//export default Radium(App);
