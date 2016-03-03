import React, { Component, PropTypes } from 'react'
import { FaCog } from 'react-icons/lib/fa'

import './index.css'

export default class AppBar extends Component {
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
      <a className="AppBar-link" href={`${octobluUrl}/profile`}>Profile</a>
      <a className="AppBar-link" href={`${octobluUrl}/guides`}>Guides</a>
      <a className="AppBar-link" href={`${octobluUrl}/signout`}>Sign Out</a>
    </span>
  }

  render() {
    const { octobluUrl } = this.props

    return <div className="AppBar-container">
      <div className="AppBar">
        <a className="AppBar-link AppBar-link--logo" href={`${octobluUrl}`}>
          <img className="AppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="AppBar-nav AppBar-nav--primary" role="navigation">
          <a className="AppBar-link" href={`${octobluUrl}/things`}>Things</a>
          <a className="AppBar-link AppBar-link--is-selected" href={`${octobluUrl}/design`}>Design</a>
          <a className="AppBar-link" href={`${octobluUrl}/bluprints`}>Bluprints</a>
        </nav>

        <nav className="AppBar-nav AppBar-nav--secondary" role="navigation">
          {this.renderSettingsNav()}

          <button onClick={this.toggleSettings} aria-label="Open settings menu" className="AppBar-link">
            <FaCog className="AppBar-link-icon"/>
          </button>
        </nav>
      </div>
    </div>
  }
}
