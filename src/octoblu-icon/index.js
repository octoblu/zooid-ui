import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const OctobluIcon = ({ type, className }) => {
  const classes = classNames('OctobluIcon', className)
  const types = type.split(':')
  const iconType = types[0]
  const iconName = types[1]
  
  const url = `https://icons.octoblu.com/${iconType}/${iconName}.svg`

  return <img src={url} className={classes} alt={type}/>
}

OctobluIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default OctobluIcon
