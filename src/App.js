import React, { Component } from 'react';
import './App.css';
import './Button.js';
import logo from './Umbrella_Corporation_logo.svg';
import { MyButton } from './Button.js';
import { Screen } from './Screen';
import { Buttons } from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    const nums = [];
    this.state = {
      showing: "",
      result: 0,
      numbers: nums,
      operator: "",
      num1: 0,
      num2: 0,
      operI: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }


  render() {

    return (
      <div className="App">
      <h1 className="title"> Rod's Calculator!</h1>
        <div className="wrapper">
          <Screen className="screen" showing={this.state.showing} />
          <Buttons className="buttons">
            <MyButton className="button" value={7} label="7" onClick={() => this.handleClick(7)} />
            <MyButton className="button" value={8} label="8" onClick={() => this.handleClick(8)} />
            <MyButton className="button" value={9} label="9" onClick={() => this.handleClick(9)} />
            <MyButton className="operators" value="+" label="+" onClick={() => this.handleClick("+")} />
            <MyButton className="operators" value="*" label="*" onClick={() => this.handleClick('*')} />
            <br />
            <MyButton className="button" value={4} label="4" onClick={() => this.handleClick(4)} />
            <MyButton className="button" value={5} label="5" onClick={() => this.handleClick(5)} />
            <MyButton className="button" value={6} label="6" onClick={() => this.handleClick(6)} />
            <MyButton className="operators" value="-" label="-" onClick={() => this.handleClick("-")} />
            <MyButton className="operators" value="/" label="/" onClick={() => this.handleClick("/")} />
            <br />
            <MyButton className="button" value={1} label="1" onClick={() => this.handleClick(1)} />
            <MyButton className="button" value={2} label="2" onClick={() => this.handleClick(2)} />
            <MyButton className="button" value={3} label="3" onClick={() => this.handleClick(3)} />
            <MyButton className="ceAndEqual" value="C" label="C" onClick={() => this.clearAll()} />
            <MyButton className="ceAndEqual" value="=" label="=" onClick={() => this.calculat()} />
           
           <br/>
            <MyButton className="zero" value={0} label="0" onClick={() => this.handleClick(0)} />

 
            


          </Buttons>
        </div>
        <h2 className="bottom">March 2019. Rodrigo Eltz.</h2>
      </div>
    );

  }


  calculat() {
    let a = this.state.numbers.slice();
    let s1 = "";
    let s2 = "";
    let operation = "";
    let operationIndex = 0;
    let num1 = 0;
    let num2 = 0;
    let result = 0;

    for (let i = 0; i < a.length; i++) {
      if (typeof (a[i]) != "number") {
        operationIndex = i;
        this.setState({ operI: operationIndex });
        operation = a[i];
        this.setState({ operator: operation });
      }
    }

    for (let i = 0; i < operationIndex; i++) {
      s1 += a[i];
      num1 = parseInt(s1);
    }
    for (let i = operationIndex + 1; i < a.length; i++) {
      s2 += a[i];
      num2 = parseInt(s2);
    }

    num1 = parseInt(s1);
    //testing
    this.setState({ num1: num1 });
    num2 = parseInt(s2);
    //testing
    this.setState({ num2: num2 });

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;

    }
    this.setState({ showing: result })
  }


  clearAll() {
    let empty = [];
    this.setState({ numbers: empty, showing: "" });

  }
  handleClick(value) {
    let a = this.state.numbers.slice();
    a.push(value);
    let s = "";

    this.setState({ numbers: a });
    for (let i = 0; i < a.length; i++) {
      s += a[i];
    }
    this.setState({ showing: s });

  }



}

export default App;
