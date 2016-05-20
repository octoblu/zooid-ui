import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import PageActions from './actions'
import PageHeader from './header'
import PageTitle from './title'

const PAGE_WIDTHS = ['medium', 'large', 'small', 'full']

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.oneOf(PAGE_WIDTHS),
}

const defaultProps = {
  width: PAGE_WIDTHS[0],
}

const Page = ({ children, className, width }) => {
  const classes = classNames('Page', `Page--${width}`, className)

  return <main className={classes}>{children}</main>
}

Page.propTypes    = propTypes
Page.defaultProps = defaultProps

export {Page, PageActions, PageHeader, PageTitle}
