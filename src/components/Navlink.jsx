import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = (props, context) => {
  const isActive = context.router.route.location.pathname === props.to;
  const className = isActive ? 'active' : '';
  return (
    <Link className={className} {...props}>
      {props.children}
    </Link>
  );
};

NavLink.contextTypes = {
  router: PropTypes.object,
};

NavLink.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])).isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
