import React from 'react';
import styled from 'styled-components';

const ModalHeader = styled.div`
  padding: 1rem;
`;

const Header = ({ children }) => {
  return <ModalHeader>{children}</ModalHeader>;
};

export default Header;
