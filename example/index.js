import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import MeshbluDeviceEditor from '../src/index'
import { Message, TopBar } from '../src/index'

class Example extends Component {
  render() {
    console.log('TopBar', TopBar);
    return (
      <div>
        <h1>Zooid UI</h1>

        <div>
          <h2>Top Bar</h2>
          <TopBar>Hello World</TopBar>
        </div>

        <div>
          <h2>Message</h2>

          <Message>
            This is a regular <a href="#">with a link</a>
          </Message>

          <Message type="alert">
            This is an alert message <a href="#">with a link</a>
          </Message>

          <Message type="success">
            <strong>Success: </strong>
            This is a successful message <a href="#">with a link</a>
          </Message>

          <Message type="error">
            <strong>Error: </strong>
            This is an error message <a href="#">with a link</a>
          </Message>
        </div>
      </div>
    )


  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
