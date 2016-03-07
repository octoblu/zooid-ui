import React, { PropTypes } from 'react'
import classNames from 'classnames'

import PageTitle from './title'


const pageTitle = (title) => {
  if (title) return <PageTitle>{title}</PageTitle>
  return null
}

const PageHeader = ({ children, className, title }) => {
  const classes = classNames('Page-header', className)

  return <header className={classes}>
    {pageTitle(title)}
    {children}
  </header>
}

PageHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
}

export default PageHeader
