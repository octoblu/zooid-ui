import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { FaCog } from 'react-icons/lib/fa'
import { AppBar, AppBarPrimary, AppBarSecondary} from '../app-bar'

import './index.css'

export default class OctobluAppBar extends Component {
  state = {
    showSettings: false
  }

  static propTypes = {
    octobluUrl: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings })
  }

  renderSettingsNav() {
    if (!this.state.showSettings) return null

    const { octobluUrl } = this.props

    return <span aria-hidden="true">
      <a className="OctobluAppBar-link" href={`${octobluUrl}/profile`}>Profile</a>
      <a className="OctobluAppBar-link" href={`${octobluUrl}/guides`}>Guides</a>
      <a className="OctobluAppBar-link" href={`${octobluUrl}/signout`}>Sign Out</a>
    </span>
  }

  render() {
    const { octobluUrl, className } = this.props
    const classes = classnames('OctobluAppBar', className)
    return <AppBar class={classes}>
      <AppBarPrimary>
        <a className="OctobluAppBar-link OctobluAppBar-link--logo" href={`${octobluUrl}`}>
          <img className="OctobluAppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="OctobluAppBar-nav OctobluAppBar-nav--primary" role="navigation">
          <a className="OctobluAppBar-link" href={`${octobluUrl}/things`}>Things</a>
          <a className="OctobluAppBar-link OctobluAppBar-link--is-selected" href={`${octobluUrl}/design`}>Design</a>
          <a className="OctobluAppBar-link" href={`${octobluUrl}/bluprints`}>Bluprints</a>
        </nav>
      </AppBarPrimary>

      <AppBarSecondary>
        <nav className="OctobluAppBar-nav OctobluAppBar-nav--secondary" role="navigation">
          {this.renderSettingsNav()}

          <button onClick={this.toggleSettings} aria-label="Open settings menu" className="OctobluAppBar-link">
            <FaCog className="OctobluAppBar-link-icon"/>
          </button>
        </nav>
      </AppBarSecondary>
    </AppBar>
  }
}
