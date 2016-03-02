import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './index.css';

const PageTitle = ({ children, className }) => {
  const componentClass = classNames('Page-title', className);
  return <h2 className={componentClass}>{children}</h2>
};

export default PageTitle
