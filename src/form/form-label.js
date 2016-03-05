import classNames from 'classnames'
import React, { PropTypes } from 'react'

const FormLabel = ({ children, className, required }) => {
  const componentClass = classNames('Form-label', className)

  let requiredAbbr = null
  if (required) requiredAbbr = <abbr className="Form-labelRequired" title="required">*</abbr>

  return <label className={componentClass}>{requiredAbbr}{children}</label>
}

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool
}

export default FormLabel
