import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, Message, TopBar, TopBarTitle, TopBarNav } from '../src/index'

import './style.css'

class Example extends Component {
  render() {
    console.log('TopBar', TopBar);
    return (
      <div>
        <h1>Zooid UI</h1>

        <section>
          <h2>Top Bar</h2>
          <TopBar>
            <TopBarTitle>Top Bar Title</TopBarTitle>
            <TopBarNav>
              <a className="TopBar-navLink TopBar-navLink--active">Link 1</a>
              <a className="TopBar-navLink">Link 2</a>
              <a className="TopBar-navLink">Link 3</a>
              <a className="TopBar-navLink">Link 4</a>
            </TopBarNav>
          </TopBar>
        </section>

        <section className="Buttons">
          <h2>Buttons</h2>
          <Button>Button</Button>
          <Button kind="primary">Primary Button</Button>
          <Button kind="approve">Approve Button</Button>
          <Button kind="danger">Danger Button</Button>
          <Button kind="neutral">Neutral Button</Button>
          <Button kind="hollow-primary">Hollow Primary Button</Button>
          <Button kind="hollow-approve">Hollow Approve Button</Button>
          <Button kind="hollow-danger">Hollow Danger Button</Button>
          <Button kind="hollow-neutral">Hollow Neutral Button</Button>
          <Button kind="no-style">No Style Button</Button>

          <h3>Button Sizes</h3>
          <Button size="large">Large Button</Button>
          <Button size="regular">Regular Button</Button>
          <Button size="small">Small Button</Button>

          <h3>Disabled Buttons</h3>
          <Button disabled>Button</Button>
          <Button disabled kind="primary">Primary Button</Button>
          <Button disabled kind="approve">Approve Button</Button>
          <Button disabled kind="danger">Danger Button</Button>
          <Button disabled kind="neutral">Neutral Button</Button>
          <Button disabled kind="hollow-primary">Hollow Primary Button</Button>
          <Button disabled kind="hollow-approve">Hollow Approve Button</Button>
          <Button disabled kind="hollow-danger">Hollow Danger Button</Button>
          <Button disabled kind="hollow-neutral">Hollow Neutral Button</Button>
          <Button disabled kind="no-style">No Style Button</Button>

        </section>

        <section>
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
        </section>
      </div>
    )


  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
