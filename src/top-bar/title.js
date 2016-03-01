import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

const TopBarTitle = ({ children, className }) => {
  const classes = classNames('TopBar-title', className)
  
  return <h1 className={classes}>{children}</h1>
}

TopBarTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default TopBarTitle
