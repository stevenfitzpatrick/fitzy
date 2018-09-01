import React from 'react';
import styled from 'styled-components';

export const ModalBody = styled.div`
  padding: 1rem;
`;

const Body = ({ children }) => {
  return <ModalBody>{children}</ModalBody>;
};

export default Body;
