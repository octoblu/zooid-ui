import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

export default class TopBar extends Component {
  render() {
    const { children, className } = this.props
    const classes = classNames('TopBar', className)

    return (
      <header className={classes}>
        {this.props.children}
      </header>
    )
  }
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
