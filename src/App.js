import React, { Component } from "react";

class App extends Component {
  render() {
    const greeting = 'Hi!';
    return (
      <React.Fragment>
        <h1 className='foo'>{greeting}</h1>
        <label htmlFor='bar'>bar</label>
        <input type='text' onClick={() => {console.log('I am clicked!')}} />
        <input type='text' onChange={() => {console.log('I am changed!')}} />
      </React.Fragment>
    );
  }
}

export default App;
