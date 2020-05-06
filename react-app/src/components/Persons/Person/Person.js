// import React from 'react';

import React,{Component} from 'react';

import AuthContext from '../../../context/auth-context'

//import Aux from '../../../hoc/Aux';

import {StyleDiv} from './StyledComponent.js';

import PropTypes from 'prop-types';

//import Radium from 'radium'
//import './Person.css'

//stateless component//

// const person=(props)=>
// {
//     return <p> I am a person</p>
//     return <p>I am a person with {Math.floor(Math.random()*30)} years old! </p>
//     return <p>I am a {props.name} with  {props.age} old! </p>
// }

// const person=(props)=>
// {
//     return(
//         <div>
//             <p> I am a {props.name} with  {props.age} old! </p>
//             <p>{props.children}</p>
//         </div>
//     )
// };
   
// const StyleDiv=styled.div`



//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid seagreen;
//     box-shadow: 0 2px 3px  slateblue;
//     padding: 16px;
//     text-align: center;


// '@media(min-width:500px)':
//         {
//             width:'450px'
//         }
// `;

//click//

class Person extends Component
// const person=(props)=>
{

    constructor(props)
    {
        super(props);
        this.inputElementRef=React.createRef();
    }

    static contextType=AuthContext;


    componentDidMount()
    {
        //1st way
        //document.querySelector('input').focus();// it selects the first input box by default
        
        //2nd way
        //this.inputElement.focus();

        //3rd way
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }
    render()
    {

    
    console.log('[Person.js] renderingg...');
    // const style=
    // {
    //     '@media(min-width:500px)':
    //     {
    //         width:'450px'
    //     }
    // }




    // const rnd=Math.random();
    // if(rnd>0.7)
    // {
    //     throw new Error("something went wrong");
    // }
    return(
        //<div className="Person" style={style}>

        //styled.div
         <StyleDiv>  
             {/* <AuthContext.Consumer>
                 {(context)=> 
                 context.authenticated ? <p> Authenticated! </p>: <p> Please login in! </p>}
             </AuthContext.Consumer>
         */}
          
               { this. context.authenticated ? 
               <p> Authenticated! </p>: 
               <p> Please login in! </p>}
            




        {/* //<Aux> */}
            {/* {this.props.isAuth ? <p> Authenticated! </p>: <p> Please login in! </p>} */}
            <p onClick={this.props.click}> I am a {this.props.name} with  {this.props.age} old! </p>
            <p key="i1">{this.props.children}</p>
            <input 
            key="i2"
            //ref={(inputEl)=>this.inputElement=inputEl}

            ref={this.inputElementRef}
            type="text" onChange={this.props.changed} 
            value={this.props.name}>

            </input>
                 {/* </Aux> */}
                 </StyleDiv>   
                   //</div>
    )
};
}

Person.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
}

// export default Radium(person);
export default Person;