import React, { PropTypes } from 'react'
import classNames from 'classnames'

const PageTitle = ({ children, className }) => {
  const classes = classNames('Page-title', className)

  return <h2 className={classes}>{children}</h2>
}

export default PageTitle
