import React from 'react'
import {StyledButton} from './Persons/Person/StyledComponent.js';


const cockpit=()=>
{
    return (

        <div>
        <h2> Hi I am react app</h2>

        <p className={classes.join(' ')}> Hello react!</p>

        <StyledButton alt={this.state.showPersons} 
      onClick={this.personToggleHandler}> Switch </StyledButton>
        </div>

    );
}


export default cockpit;