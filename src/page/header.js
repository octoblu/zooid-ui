import React, { PropTypes } from 'react'
import classNames from 'classnames'

const PageHeader = ({ children, className }) => {
  const classes = classNames('Page-header', className)

  return <header className={classes}>{children}</header>
}

export default PageHeader
