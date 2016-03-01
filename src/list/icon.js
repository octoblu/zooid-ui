import classNames from 'classnames'
import React, { PropTypes } from 'react'

import Icon from '../icon'

const ListItemIcon = ({ className, name }) => {
  const classes = classNames('List-itemIcon', className)

  return <Icon className={classes} name={name}/>
}

ListItemIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default ListItemIcon
