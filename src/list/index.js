import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

import ListItem from './item'
import ListItemIcon from './icon'

const List = ({ children, className }) => {
  const classes = classNames('List', className)
  return <ul className={classes}>{children}</ul>
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export { List, ListItem, ListItemIcon }
