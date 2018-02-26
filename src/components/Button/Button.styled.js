import styled from 'styled-components';

const FitzyButton = styled.button`
  white-space: nowrap;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  display: inline-block;
  transition: all 0.25s ease;
  outline: none;
  height: 40px;
  padding: 0 14px;
  line-height: 40px;
  border: none;
  user-select: none;
  background-color: #3dd28d;
  color: white;
  cursor: pointer;
  appearance: none;
  font-size: 14px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    background-color: #e6e6e6;
    color: rgba(0, 0, 0, 0.3);
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
    border: none;
    outline: none;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.75;
  }
`;

/** @component */
export { FitzyButton };
