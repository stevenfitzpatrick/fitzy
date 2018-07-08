import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Icon from '../Icon/Icon';
import { colors } from '../../theme/theme';

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  color: #ffffff;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const Header = ({ children, icon }) => {
  return (
    <ModalHeader>
      {icon ? <Icon icon={icon} size="24" use="Light" /> : null}
      {children}
    </ModalHeader>
  );
};

Header.propTypes = {
  icon: string
};

export default Header;
