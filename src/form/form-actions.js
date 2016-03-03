import React, { PropTypes } from 'react'
import classNames from 'classnames'


const FormActions = ({ children, className }) => {
  const componentClass = classNames('Form-actions', className)

  return <div className={componentClass}>{children}</div>
}

FormActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default FormActions
