//Aux is the parent//



import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js'
import classes from './Layout.css'    //module css//
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'

class Layout extends Component
{
    state=
    {
        showSideDrawer:false   //changed//
    }

    sideDrawerClosedHandler=()=>
    {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler=()=>
    {
        this.setState((prevState)=>
        {
        return {showSideDrawer:!prevState.showSideDrawer}    //need to store prevstate otherwise inconsistent behaviour//
        
        });
        
    }



    render()
    {
        return (
            <Aux>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer 
    open={this.state.showSideDrawer} 
    closed={this.sideDrawerClosedHandler}/>

    <main className={classes.Content}>
        {this.props.children}
    </main>

    </Aux>
        )
    }
}


export default Layout;