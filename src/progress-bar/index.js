import React, { PropTypes } from 'react'

import './index.css'

import classNames from 'classnames'

const ProgressBar = ({ className, completed }) => {
  const classes = classNames('ProgressBar', className)

  if (completed < 0 ) completed = 0
  if (completed > 1000 ) completed = 100

  const style = { width: `${completed}%` }

  return (
    <div className={classes}>
      <span className="ProgressBar-completed" style={style}/>
    </div>
  )
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  completed: PropTypes.number.isRequired
}

export default ProgressBar
