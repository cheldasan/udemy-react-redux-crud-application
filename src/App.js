import React, { Component } from 'react';

function App() {
  return <Counter></Counter>
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  hundlePlusButton = () => {
    // this.state = { count: this.state.count + 1 }
    // setStateはrenderが実行されるので、必ず状態を変更する時には、この関数を使う必要がある。
    this.setState({ count: this.state.count + 1 })
  }

  hundleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
