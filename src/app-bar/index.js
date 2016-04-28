import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

import AppBarPrimary from './primary'
import AppBarSecondary from './secondary'
import AppBarTitle from './title'


const appTitle = (title) => {
  if (title) return <AppBarPrimary>
    <AppBarTitle>{title}</AppBarTitle>
  </AppBarPrimary>

  return null
}

const AppBar = ({children, className, title}) => {
  const classes = classNames('AppBar', className)
  return <div className={classes}>
    {appTitle(title)}
    {children}
  </div>
}

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
}

export { AppBar, AppBarPrimary, AppBarSecondary, AppBarTitle }
