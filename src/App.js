import React, { Component } from 'react';
import './App.css';
import VaCmp from './ValidationComponent/ValidationComponent';
import ChCmp from './CharComponent/CharComponent';

class App extends Component {
  state = {
    outputLength : '0',
    outputchar : '',
    output : []
  }

  inputChangeHandler = (event) => {
    this.setState({
        outputLength : event.target.value.length,
        outputchar : event.target.value
    });
  }

  remove = (index) => {
    let output = [...this.state.output];
    output.splice(index, 1);
    const char = output.join('');
    this.setState({
        outputLength : char.length,
        outputchar : char,
        output : output
    })
  }

  render() {
    this.state.output = [...this.state.outputchar];
    let charaCmp = null;
    //let char = 
    if (this.state.outputLength > 0) {
      charaCmp = this.state.output.map((char, index) => {
         return (<ChCmp key={index} 
                        chara={char}
                        click={this.remove.bind(this, index)}/>);
      })
    }
    

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div>
          <p>Length of the entered String is ---> {this.state.outputLength}</p>
          <VaCmp textLength={this.state.outputLength}/>
          <input type='text' onChange={this.inputChangeHandler.bind(this)}/>
          {charaCmp}
        </div>
      </div>
    );
  }
}

export default App;
