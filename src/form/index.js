import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

import FormActions from 'form-actions'
import FormField from 'form-field'
import FormInput from 'form-input'

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this
    const componentClass = classNames('Form', props.className)

    return <form {...props} className={componentClass}>{props.children}</form>
  }
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export { Form, FormActions, FormField, FormInput }
