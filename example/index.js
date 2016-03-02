import classNames from 'classnames'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, Card, ChannelImage, Icon, List, ListItem, ListItemIcon, Message, ProgressBar, TopBar, TopBarTitle, TopBarNav } from '../src/index'

import './style.css'

const Section = ({children, className, title}) => {
  const classes = classNames('Section', className)
  return (
    <section className={classes}>
      <h2 className="Section-title">{title}</h2>
      {children}
    </section>
  )
}

const SubSection = ({children, className, title}) => {
  const classes = classNames('Section--sub', className)

  return (
    <section className={classes}>
      <h3 className="Section-title">{title}</h3>
      {children}
    </section>
  )
}

class Example extends Component {

  render() {
    return (
      <div>
        <h1>Zooid UI</h1>

        <Section title="Top Bar">
          <TopBar>
            <TopBarTitle>Top Bar Title</TopBarTitle>
            <TopBarNav>
              <a className="TopBar-navLink TopBar-navLink--active">Link 1</a>
              <a className="TopBar-navLink">Link 2</a>
              <a className="TopBar-navLink">Link 3</a>
              <a className="TopBar-navLink">Link 4</a>
            </TopBarNav>
          </TopBar>
        </Section>

        <Section title="Buttons" className="Buttons">
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

          <SubSection title="Button Sizes">
            <Button size="large">Large Button</Button>
            <Button size="regular">Regular Button</Button>
            <Button size="small">Small Button</Button>
          </SubSection>

          <SubSection title="Disabled Buttons">
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
          </SubSection>

          <SubSection title="Block Buttons">
            <Button block kind="primary">Block Button</Button>
          </SubSection>
        </Section>

        <Section title="Card" className="Cards">
          <Card>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Card>
        </Section>

        <Section title="List" className="Lists">
          <List>
            <ListItem>Donald Trump</ListItem>
            <ListItem>Kanye West</ListItem>
          </List>

          <SubSection title="Lists with Icons">
            <List>
              <ListItem>
                <ListItemIcon name="MdPerson"/>
                Donald Trump
              </ListItem>

              <ListItem>
                <ListItemIcon name="MdPerson"/>
                Kanye West
              </ListItem>
            </List>
          </SubSection>
        </Section>

        <Section title="Channel Image" className="ChannelImages">
          <ChannelImage name="twitter"/>
          <ChannelImage name="sharefile"/>
          <ChannelImage name="gotomeeting"/>
        </Section>

        <Section title="Icons">
        </Section>

        <Section title="Progress Bar">
          <ProgressBar completed={77}/>
        </Section>

        <Section title="Message">
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

          <SubSection title="Full Width Message">
            <Message fullWidth>
              This is a full width message with text aligned to the center
            </Message>
          </SubSection>
        </Section>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
