import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

import FormLabel from './form-label'

const FormField = ({ children, className, label, name, required }) => {
  const componentClass = classNames('Form-field', className)

  let formLabel = null
  if (label) {
    formLabel = <FormLabel
      htmlFor={name}
      required={required}
    >
      {label}
    </FormLabel>
  }

  return <div className={componentClass}>
    {formLabel}
    {children}
  </div>
}

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
}

export default FormField
