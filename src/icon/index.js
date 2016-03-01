import * as MaterialIcons from 'react-icons/lib/md'

import classNames from 'classnames'
import React, { PropTypes } from 'react'

const Icon = ({ className, name }) => {
  const classes = classNames('Icon', className)
  const MaterialIcon = MaterialIcons[name]

  let iconNode = null
  if (MaterialIcon) iconNode = <MaterialIcon />

  return <i className={classes} role='icon'>{iconNode}</i>
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default Icon
