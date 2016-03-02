import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import PageActions from './actions'
import PageHeader from './header'
import PageTitle from './title'

const Page = ({ children, className }) => {
  const classes = classNames('Page', className)

  return <main className={classes}>{children}</main>
}

export {Page, PageActions, PageHeader, PageTitle}
