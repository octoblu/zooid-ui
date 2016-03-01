import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const Breadcrumb = ({fragments}) => {
  const fragmentNodes = fragments.map(fragment => {
    let {label, linkTo} = fragment

    if (linkTo) return <Link to={linkTo} className="Breadcrumb-fragment Breadcrumb-fragment--link" key={label}>{label}</Link>
    return <span className="Breadcrumb-fragment" key={label}>{label}</span>
  });

  return <div className="Breadcrumb">{fragmentNodes}</div>
}

Breadcrumb.propTypes = {
  fragments: PropTypes.arrayOf(PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    linkTo: React.PropTypes.string
  })),
}

export default Breadcrumb
