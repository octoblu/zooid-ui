import React, { PropTypes } from 'react'

import './index.css'

import classNames from 'classnames';


const Card = ({children, className}) => {
  const componentClass = classNames('Card', className);

  return <div className={componentClass}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Card
