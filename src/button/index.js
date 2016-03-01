import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

class Button extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      children,
      className,
      disabled,
      href,
      kind,
      draggable,
      onClick,
      size,
      type
    } = this.props


    const classes = classNames(
      'Button',
      `Button--${kind}`,
      `Button--${size}`,
      {'Button--disabled': disabled},
      className
    )

    let tag = 'button'
    if (href) tag = 'a'

    const properties = {
      className: classes,
      disabled,
      draggable,
      href,
      onClick,
      type
    }

    return React.createElement(tag, properties, children)
  }
}

const BUTTON_SIZES = ['regular', 'large', 'small']
const BUTTON_KINDS = [
  '',
  'primary',
  'approve',
  'danger',
  'neutral',
  'hollow-primary',
  'hollow-approve',
  'hollow-danger',
  'hollow-neutral',
  'no-style'
]

Button.defaultProps = {
  disabled: false,
  kind: BUTTON_KINDS[0],
  size: BUTTON_SIZES[0]
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(BUTTON_KINDS),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(BUTTON_SIZES),
  type: PropTypes.string,
  draggable: PropTypes.string
}

export default Button
