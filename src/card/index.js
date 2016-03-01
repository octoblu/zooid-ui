// TODO: Add Size variations: small, medium, large & block/full width
import React, { PropTypes } from 'react'

import './index.css'

import classNames from 'classnames';

const Card = ({children, className}) => {
  const classes = classNames('Card', className);
  return <div className={classes}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Card
