import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import MeshbluDeviceEditor from '../src/index'
import { TopBar } from '../src/index'

class Example extends Component {
  render() {
    console.log('TopBar', TopBar);
    return (
      <div>
        <h1>Zooid UI</h1>

        <h2>Top Bar</h2>
        <TopBar>Hello World</TopBar>
      </div>
    )


  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
