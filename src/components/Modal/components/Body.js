import React from 'react';
import styled from 'styled-components';

export const ModalBody = styled.div`
  padding: 1rem;
`;

const Body = ({ children }) => {
  return <ModalBody className="model-body">{children}</ModalBody>;
};

export default Body;
