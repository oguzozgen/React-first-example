import React, { Component } from 'react';
class Button extends Component {
    //constructor is not neccesery. 
    // we can call directly this.state
    constructor(props){
        super(props);
        this.state={counter:0};
    }

    // the method that called from render html. 
    // '=>' for function decleration
    handleClick=()=>{
        //sets variable in state variables holder
        this.setState((prevState)=>{
            // return dynamic increased value
            // does not have to write return
            //return{
                counter:prevState.counter+1
            //}

        });
    };
    // Renders in virtual dom every changes.
    render() {
        return {
            <button onClick = {this.handleClick}>
            {this.state.counter}
            </button>
        }
    };

}
ReactDOM.render(<Button />,mountNode);
