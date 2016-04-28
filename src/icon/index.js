import * as MaterialIcons from 'react-icons/lib/md'
import * as FontAwesomeIcons from 'react-icons/lib/fa'
import * as Typicons from 'react-icons/lib/ti'
import * as GithubIcons from 'react-icons/lib/go'

import classNames from 'classnames'
import React, { PropTypes } from 'react'

const Icons = {
  'md': MaterialIcons,
  'fa': FontAwesomeIcons,
  'ti': Typicons,
  'go': GithubIcons,
}

const Icon = ({ className, name, type }) => {
  const classes = classNames('Icon', className)
  const TheIcon = Icons[type][name]

  let iconNode = null
  if (TheIcon) iconNode = <TheIcon />

  return <i className={classes} role='icon'>{iconNode}</i>
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['md', 'fa', 'ti', 'go']),
}

Icon.defaultProps = {
  type: 'md'
}
export default Icon
