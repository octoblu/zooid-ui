import React, { PropTypes } from 'react';
import classNames from 'classnames';

const PageActions = ({ children, className }) => {
  const componentClass = classNames('Page-actions', className);
  return <div className={componentClass}>{children}</div>
};

export default PageActions
