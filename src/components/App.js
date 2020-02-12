import React, { Component } from "react";

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // 初期化時状態に実行される
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    // 状態変更の時はsetStateで変更
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }


  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
