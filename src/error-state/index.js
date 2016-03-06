import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

const ErrorState = ({ className, description, title }) => {
  const classes = classNames('ErrorState', className)

  return <div className={classes}>
    <div className="ErrorState-title">{title}</div>
    <div className="ErrorState-description">{description}</div>
  </div>
}

ErrorState.defaultProps = {
  description: '',
  title: 'OOPS'
}

ErrorState.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default ErrorState
