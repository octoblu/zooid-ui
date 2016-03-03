import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './index.css';

class FormInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this
    const componentClass = classNames('Form-input', props.className)

    return <input {...props} className={componentClass} />
  }
}

export default FormInput
