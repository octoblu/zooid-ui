import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

const AppBarPrimary = ({children, className}) => {
  const classes = classNames(
    'AppBar-section',
    'AppBar-section--primary',
    className
  )

  return <div className={classes}>{children}</div>
}

AppBarPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

const AppBarSecondary = ({children, className}) => {
  const classes = classNames(
    'AppBar-section',
    'AppBar-section--secondary',
    className
  )

  return <div className={classes}>{children}</div>
}

AppBarSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

const AppBar = ({children, className}) => {
  const classes = classNames('AppBar', className)
  return <div className={classes}>{children}</div>
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export { AppBar, AppBarPrimary, AppBarSecondary }
