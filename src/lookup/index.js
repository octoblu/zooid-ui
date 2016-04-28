import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import MdSearch from 'react-icons/lib/md/search';
import './index.css'

import FormInput from '../form/form-input'

const Lookup = ({ className, onChange, placeholder }) => {
  const classes = classNames('Lookup', className)

  return <div className={classes}>
    <i className="Lookup-icon" role="icon"><MdSearch /></i>
    <FormInput
      onChange={onChange}
      placeholder={placeholder}
      className="Lookup-input"
      unstyled
    />
  </div>
}

Lookup.defaultProps = {
  onChange: () => {},
  placeholder: 'You should add a placeholder :)'
}

Lookup.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default Lookup
