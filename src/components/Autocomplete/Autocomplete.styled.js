import styled from 'styled-components';

import CloseButton from '../../styles/CloseButton.styled';
import { colors } from '../../theme/theme';
import { DropDownIcon } from '../Dropdown/Dropdown.styled';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  min-width: 14rem;
  z-index: 0;
`;

const InputClose = CloseButton.extend`
  &:focus {
    > ${/*sc-s*/ DropDownIcon} {
      transform: rotate(180deg);
      fill: ${colors.primaryActive};
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  padding: 0 1rem;

  &:hover,
  &:focus {
    border-color: ${colors.primaryActive};
    outline: none;
  }
`;

const Input = styled.input`
  position: relative;
  border: none;
  font-size: 14px;
  line-height: 1.375rem;
  padding: 0.5rem 0;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

export { Input, InputClose, InputContainer, Container };
