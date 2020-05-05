import React,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux.js';
import Backdrop from '../Backdrop/Backdrop.js';

class Modal extends Component
{

    shouldComponentUpdate(nextProps,nextState)
    {
        return nextProps.show!==this.props.show;
    }

    componentWillUpdate()
    {
        console.log('In modal component will update')
    }

    render()
    {
        return(

            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div 
    className={classes.Modal}
    style={
        {
            transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',   //vh refers to viewport height, will slide it outside the screen//
            opacity:this.props.show ? '1' :'0'
        }
    }
    
    >
        {this.props.children}
    </div>
    </Aux>

        )
    }
}

export default Modal;