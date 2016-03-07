import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

import AppBarPrimary from './primary'
import AppBarSecondary from './secondary'
import AppBarTitle from './title'

const AppBar = ({children, className}) => {
  const classes = classNames('AppBar', className)
  return <div className={classes}>{children}</div>
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export { AppBar, AppBarPrimary, AppBarSecondary, AppBarTitle }
