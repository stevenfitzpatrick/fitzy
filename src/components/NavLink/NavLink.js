import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../Icon/Icon';

const NavLink = ({ to, href, linkType: LinkType, children, icon, ...rest }) => (
  <>
    {href ? (
      <a href={href} {...rest}>
        {icon ? <Icon icon={icon} size="20" /> : null}
        {children}
      </a>
    ) : (
      <LinkType to={to} {...rest}>
        {icon ? <Icon icon={icon} size="20" /> : null}
        {children}
      </LinkType>
    )}
  </>
);

NavLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  LinkType: PropTypes.func,
  children: PropTypes.any,
  icon: PropTypes.string
};

export default NavLink;
