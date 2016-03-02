import classNames from 'classnames'
import React, { PropTypes } from 'react'

const PageActions = ({ children, className }) => {
  const componentClass = classNames('Page-actions', className)

  return <div className={componentClass}>{children}</div>
}

export default PageActions
