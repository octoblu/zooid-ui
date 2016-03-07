import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

const AppBarTitle = ({children, className}) => {
  const classes = classNames('AppBar-title', className)

  return <div className={classes}>{children}</div>
}

AppBarTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default AppBarTitle
