import classNames from 'classnames'
import React, { PropTypes } from 'react'
import OctobluIcon from '../octoblu-icon'

import './index.css'

const ChannelImage = ({ name, className }) => {
  const classes = classNames('OctobluIcon', className)

  const type = `channel:${name}`
  return <OctobluIcon type={type} className={classes} />
}

ChannelImage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ChannelImage
