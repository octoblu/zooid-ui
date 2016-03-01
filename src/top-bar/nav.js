import classNames from 'classnames'
import React, { PropTypes } from 'react'

const TopBarNav = ({children, className}) => {
  const classes = classNames(
    'TopBar-section',
    'TopBar-section--nav',
    'TopBarNav',
    className
  )

  return <nav className={classes} role='navigation'>{children}</nav>
}

TopBarNav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default TopBarNav
