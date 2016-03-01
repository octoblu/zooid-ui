import classNames from 'classnames'
import React, { PropTypes } from 'react'

const ListItem = ({children, className}) => {
  const classes = classNames(
    'List-item',
    className
  )

  return (
    <li className={classes} role='navigation'>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default ListItem
