import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const Nav = ({children, className}) => {
  const classes = classNames('Nav', className)

  return <nav className={classes} role='navigation'>{children}</nav>
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Nav
