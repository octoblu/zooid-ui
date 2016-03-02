import React, { PropTypes } from 'react'
import classNames from 'classnames'

const PageHeader = ({ children, className }) => {
  const componentClass = classNames('Page-header', className)
  return <header className={componentClass}>{children}</header>
}

export default PageHeader
