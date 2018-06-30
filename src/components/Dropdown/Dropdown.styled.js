import styled, { css } from 'styled-components';

const dropdownStyles = css`
  position: relative;
  cursor: pointer;
  word-wrap: break-word;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  transform: rotateZ(0);
  min-width: 14em;
  background: #fff;
  display: inline-block;
  padding: 0.78571429em 2.1em 0.78571429em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  transition: box-shadow 0.1s ease, width 0.1s ease;
`;

const DropDownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const menuStyles = css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

const buttonStyles = css`
  position: absolute;
  top: 50%;
  right: 16px;
  height: 8px;
  width: 8px;
  box-shadow: 1px 1px currentcolor;
  transform: rotate(45deg) translateY(calc(-50% - 4px));
`;

export {
  dropdownStyles,
  menuStyles,
  buttonStyles,
  DropDownMenu,
  DropDownContainer
};
