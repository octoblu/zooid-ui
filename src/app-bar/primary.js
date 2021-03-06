import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

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

export default AppBarPrimary
