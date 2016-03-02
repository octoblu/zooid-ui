import React, { PropTypes } from 'react'
import classNames from 'classnames'

import PageHeader from './header'
import PageTitle from './title'
import PageActions from './actions'

const Page = ({ children, className }) => {
  const classes = classNames('Page', className)
  return <div className={classes}>{children}</div>
}

export {Page, PageHeader, PageTitle, PageActions}
