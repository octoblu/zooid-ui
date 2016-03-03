import blacklist from 'blacklist'
import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const Breadcrumb = (props) => {
  const { className, fragments } = props

  const fragmentNodes = fragments.map((fragment, key) => {
    const { label, slug, component } = fragment
    const fragmentClasses = classNames(
      'Breadcrumb-fragment',
      {'Breadcrumb-fragment--link': slug},
      {'Breadcrumb-fragment--link': component}
    )

    if (component) return React.cloneElement(component, { className: fragmentClasses, key })
    if (slug) return <a href={slug} className={fragmentClasses} key={key}>{label}</a>
    return <span className={fragmentClasses} key={key}>{label}</span>
  })

  const classes = classNames('Breadcrumb', className)
  return <nav role="navigation" className={classes}>{fragmentNodes}</nav>
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  fragments: PropTypes.arrayOf(PropTypes.shape({
    component: React.PropTypes.element,
    label: React.PropTypes.string,
    slug: React.PropTypes.string
  })).isRequired
}

export default Breadcrumb
