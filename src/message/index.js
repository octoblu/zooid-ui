import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const Message = ({ children, className, type, dismissible }) => {
  const classes = classNames(
    'Message',
    `Message--${type}`,
    className
  )

  return <div className={classes}>
    {children}
  </div>
}

const MESSAGE_TYPES = [
  'info',
  'alert',
  'success',
  'error'
]

Message.defaultProps = {
  type: MESSAGE_TYPES[0],
  dismissible: false
}

Message.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(MESSAGE_TYPES),
  dismissible: PropTypes.bool
}

export default Message
