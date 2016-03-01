import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

const TopBarTitle = ({ children, className }) => {
  const componentClass = classNames('TopBar-title', className)
  
  return <h1 className={componentClass}>{children}</h1>
}

TopBarTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default TopBarTitle
