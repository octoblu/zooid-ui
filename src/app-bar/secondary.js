import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

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

export default AppBarSecondary
