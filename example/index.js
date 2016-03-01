import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Message, TopBar, TopBarTitle } from '../src/index'

class Example extends Component {
  render() {
    console.log('TopBar', TopBar);
    return (
      <div>
        <h1>Zooid UI</h1>

        <div>
          <h2>Top Bar</h2>
          <TopBar>
            <TopBarTitle>Top Bar Title</TopBarTitle>
          </TopBar>
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

          <h3>Full Width Message</h3>

          <Message fullWidth>
            This is a full width message with text aligned to the center
          </Message>
        </div>
      </div>
    )


  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
