import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const Message = ({ children, className, type, fullWidth }) => {
  const classes = classNames(
    'Message',
    `Message--${type}`,
    {'Message--fullWidth': fullWidth},
    className
  )

  return <div className={classes}>{children}</div>
}

const MESSAGE_TYPES = [
  'info',
  'alert',
  'success',
  'error'
]

Message.defaultProps = {
  type: MESSAGE_TYPES[0],
  dismissible: false,
  fullWidth: false
}

Message.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(MESSAGE_TYPES),
  fullWidth: PropTypes.bool
}

export default Message
