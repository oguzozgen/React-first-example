import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  //constructor is not neccesery. 
  // we can call directly this.state
  constructor(props){
      super(props);
      //this.state={counter:0};
  }
 
  // the method that called from render html. 
  // '=>' for function decleration
  handleClick = () => {
      //sets variable in state variables holder
      this.setState((prevState)=>{
          // return dynamic increased value
          // does not have to write return
          //return{
              this.props.onClickFunction(this.props.incrementValue)
          //}

      });
  };
  // Renders in virtual dom every changes.
  render() {
      return (
          <button onClick = {this.handleClick}>
              + {this.props.incrementValue}
          </button>
      )
  };

}
//ReactDOM.render(<Button />,mountNode);


const Result=(props)=>{
  return(
    <div> {props.counter}</div>

  )
};

class App extends Component {
  state={counter:0};
  incrementCounter=(incrementValue)=>{
    this.setState((prevState)=>({
      counter:prevState.counter+incrementValue
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
