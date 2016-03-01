import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

import TopBarTitle from './title'
import TopBarNav from './nav'

const TopBar = ({ children, className }) => {
  const classes = classNames('TopBar', className)
  return <header className={classes}>{children}</header>
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export { TopBar, TopBarTitle, TopBarNav }
