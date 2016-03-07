import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import './index.css'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      block,
      className,
      component,
      disabled,
      href,
      kind,
      size
    } = this.props


    const classes = classNames(
      'Button',
      `Button--${kind}`,
      `Button--${size}`,
      {'Button--block': block},
      {'Button--disabled': disabled},
      className
    )

    let props = blacklist(this.props, 'block', 'className', 'component', 'disabled', 'kind', 'size')
    props.className = classes

    let tag = 'button'
    if (href) tag = 'a'


    if (component) return React.cloneElement(component, props)

    return React.createElement(tag, props, props.children)
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
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(BUTTON_KINDS),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(BUTTON_SIZES),
  type: PropTypes.string,
  draggable: PropTypes.string
}

export default Button
