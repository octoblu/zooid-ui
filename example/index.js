import classNames from 'classnames'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  AppBar,
  AppBarPrimary,
  AppBarSecondary,
  Breadcrumb,
  Button,
  Card,
  Icon,
  Form, FormActions, FormField, FormInput,
  List, ListItem, ListItemIcon,
  Message,
  Nav,
  Page, PageActions, PageHeader, PageTitle,
  ProgressBar,
  OctobluAppBar,
  OctobluIcon,
  Spinner,
  TopBar, TopBarTitle, TopBarNav
} from '../src/index'

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
      <main>
        <TopBar>
          <TopBarTitle>Zooid UI</TopBarTitle>
        </TopBar>

        <Section title="App Bar">
          <AppBar>
            <AppBarPrimary>Primary Section</AppBarPrimary>
            <AppBarSecondary>Secondary Section</AppBarSecondary>
          </AppBar>
        </Section>

        <Section title="Octoblu App Bar">
          <OctobluAppBar octobluUrl="https://app.octoblu.com"/>
        </Section>

        <Section title="Top Bar">
          <TopBar>
            <TopBarTitle>Top Bar Title</TopBarTitle>
          </TopBar>
        </Section>

        <Section title="Navigation">
          <Nav>
            <a className="Nav-item Nav-item--active">Link 1</a>
            <a className="Nav-item">Link 2</a>
            <a className="Nav-item">Link 3</a>
            <a className="Nav-item">Link 4</a>
          </Nav>
        </Section>

        <Section title="Breadcrumbs" className="Breadcrumbs">
          <Breadcrumb fragments={[
            {
              label: 'My Gateblus',
              slug: '/'
            },
            {
              label: 'Fancy GateBlu',
            }
          ]}/>

          <SubSection title="Breadcrumbs with custom components">
            <Breadcrumb fragments={[
              {
                component: <Button href="/" kind="no-style">B for Button</Button>
              },
              {
                label: 'Fancy GateBlu',
                slug: '#'
              },
              {
                label: 'Configure'
              }
            ]}/>
          </SubSection>
        </Section>

        <Section title="Page">
          <Page>
            <PageHeader>
              <PageTitle>Page Title Goes Here</PageTitle>
              <PageActions>Page Actions</PageActions>
            </PageHeader>
          </Page>
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
            <Button size="small">Small Button</Button>
            <Button size="regular">Regular Button</Button>
            <Button size="large">Large Button</Button>
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

          <SubSection title="Icon Buttons">
            <Button kind="primary"><Icon name="MdAdd"/> Add Device</Button>
            <Button kind="approve"><Icon name="MdCheck"/> Approve</Button>
            <Button kind="danger"><Icon name="MdWarning"/> Reject</Button>
            <Button kind="neutral"><Icon name="MdWarning"/> Ummm...</Button>
          </SubSection>

          <SubSection title="Icon Only Buttons">
            <Button kind="primary"><Icon name="MdAdd"/></Button>
            <Button kind="approve"><Icon name="MdCheck"/></Button>
            <Button kind="danger"><Icon name="MdWarning"/></Button>
            <Button kind="neutral"><Icon name="MdWarning"/></Button>
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

        <Section title="Octoblu Icon" className="OctobluIcons">
          <OctobluIcon type="device:wemo"/>
          <OctobluIcon type="device:shell"/>
          <OctobluIcon type="device:other"/>
          <OctobluIcon type="channel:sms-send"/>
          <OctobluIcon type="channel:spotify"/>
          <OctobluIcon type="channel:twitter"/>
        </Section>

        <Section title="Icons"></Section>

        <Section title="Progress Bar">
          <ProgressBar completed={77}/>
        </Section>

        <Section title="Spinner">
          <Spinner size="small" />
          <Spinner />
          <Spinner size="large" />
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
      </main>
    )
  }
}

ReactDOM.render(<Example />, document.querySelector('#root'))
