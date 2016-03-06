import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

import Button from '../button'

const ctaButton = (cta, action) => {
  if (!cta) return null

  if (action.constructor === String) {
    return <Button href={action} kind="primary">{cta}</Button>
  }

  return <Button kind="primary" onClick={action}>{cta}ss</Button>
}

const EmptyState = ({ action, className, cta, description, title }) => {
  const classes = classNames('EmptyState', className)

  return <div className={classes}>
    <div className="EmptyState-title">{title}</div>
    <div className="EmptyState-description">{description}</div>
    {ctaButton(cta, action)}
  </div>
}

EmptyState.defaultProps = {
  action: () => {},
  cta: '',
  description: '',
  title: ''
}

EmptyState.propTypes = {
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default EmptyState
