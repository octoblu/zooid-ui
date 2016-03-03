import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const SPINNER_SIZES = ['regular', 'large', 'small']

const Spinner = ({ className, size }) => {
  const classes = classNames(
    'spinner-container',
    `spinner-container--${size}`,
    className
  )

  return <span className={classes}>
    <i className="spinner-circle" />
    <i className="spinner-segment" />
  </span>
}

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SPINNER_SIZES)
}

Spinner.defaultProps = {
  size: SPINNER_SIZES[0]
}

export default Spinner
