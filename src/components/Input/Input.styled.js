import styled from 'styled-components';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: 1.5rem;

  /* &:focus-within {
    label {
      top: 0;
    }
  } */
`;

const FormError = styled.span`
  display: block;
  color: red;
`;

const FitzyInput = styled.input`
  display: block;
  position: relative;
  padding: 24px 12px 12px;
  font-size: inherit;
  font-weight: normal;
  font-family: inherit;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
  background-color: #fff;
  transition: border 0.3s ease-in-out;
  margin: 0 0 5px 0;

  ~ label {
    top: ${({ value }) => (value ? '0' : '18px')};
  }
`;

const FitzyLabel = styled.label`
  display: inline-block;
  max-width: 100%;
  position: absolute;
  left: 12px;
  z-index: 1;
  transition: all 0.3s ease;
`;

/** @component */
export { FitzyInput, FormField, FitzyLabel, FormError };
