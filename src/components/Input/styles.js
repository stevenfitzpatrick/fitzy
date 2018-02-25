import styled from 'styled-components';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: 1.5rem;
`;

const FormError = styled.span`
  display: block;
  color: red;
`;

const FitzyInput = styled.input`
  display: block;
  position: relative;
  padding: 12px;
  font-size: inherit;
  font-weight: normal;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-family: inherit;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  margin: 0 0 5px 0;
`;

const FitzyLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-weight: bold;
  max-width: 100%;
`;

export { FitzyInput, FormField, FitzyLabel, FormError };
