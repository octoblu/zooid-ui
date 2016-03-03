import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

const FormField = ({ children, className, label, name }) => {
  const componentClass = classNames('Form-field', className)

  let formLabel = null
  if (label)  {
    formLabel = <label className="Form-label" htmlFor={name}>{label}</label>
  }

  return <div className={componentClass}>
    {formLabel}
    {children}
  </div>
}

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default FormField
