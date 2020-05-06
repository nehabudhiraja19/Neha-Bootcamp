import React, {Component} from 'react';

class ErrorBoundary extends Component
{
    
    state={
        hasError:false,
        errorMessage:' '
    }


    componentDidCatch=(error,info)=>
    {
        this.setState({hasError:true,errorMessage:error})
    }
    render()
    {
        if(this.state.hasError)
        {
            return <h1> {this.state.errorMessage} </h1>
        }
        else
        return this.props.children;  //when accessing with class componet need to add this with props//
        
    }
}
export default ErrorBoundary;