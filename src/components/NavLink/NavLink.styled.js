import styled from 'styled-components';

import { colors } from '../../theme/theme';
import NavLink from './NavLink';

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  color: ${colors.light};
  transition: all 0.25s ease-in;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.6px;
  font-weight: 700;
  line-height: 1.75;

  > svg {
    margin-right: 0.25rem;
  }

  &.active,
  &:hover {
    background-color: ${colors.bgColor};
    color: ${colors.primaryHover};
  }
`;

/** @component */
export default NavigationLink;
