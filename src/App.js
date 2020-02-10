// import React, { Component } from "react"; // class component
import React from "react"; // 関数component

// class component ...
// class App extends Component {
//   render() {
//     const greeting = 'Hi!';
//     return (
//       <React.Fragment>
//         <h1 className='foo'>{greeting}</h1>
//         <label htmlFor='bar'>bar</label>
//         <input type='text' onClick={() => {console.log('I am clicked!')}} />
//         <input type='text' onChange={() => {console.log('I am changed!')}} />
//       </React.Fragment>
//     );
//   }
// }

// 関数component
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
