import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './index.css';

class FormInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this
    const componentClass = classNames(
      'Form-input',
      {'Form-input--unstyled': props.unstyled}, 
      props.className
    )

    return <input {...props} className={componentClass} />
  }
}

export default FormInput
