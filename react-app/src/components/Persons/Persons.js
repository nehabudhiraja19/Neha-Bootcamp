import React ,{PureComponent} from 'react';
import Person from './Person/Person'




// const persons=(props)=> 
class Persons extends PureComponent
{
  static getDeriveStateFromProps(props,state)
  {
    console.log('In [Persons.js] getDerivedStateFromProps');
    return state;
  }

  // commponentWillReceiveProps(props)
  // {
  //   console.log('In [Persons.js] componentReceiveProps',props);
  // }


  //INSTEAD USED PURE COMPONENT

  // shouldComponentUpdate(nextProps,nextState)
  // {
  //   console.log('In [Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons!== this.props.persons ||
  //     nextProps.changed !==this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     )
  //   {
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }



  // }

//return true; // if return only true in component update without checking condition it will render each time, will compare the this.props to the upcoming props with the condition//


  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log('In [Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot'};
  }

  componentDidUpdate(prevProps,prevState,snapshot)
  {
    console.log('In [Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount()
  {
    console.log('In [Persons.js] componentWillUnmount');
  }

  render()
  {
  console.log('[Persons.js] rendering....');
     return(
        this.props.persons.map((person,index)=>
            {
              return (<Person
              click={()=>this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.props.changed(event,person.id)}
              //isAuth={this.props.isAuthenticated}
              />
              );
            })
            
             
     );
          };
        }

            export default Persons;

