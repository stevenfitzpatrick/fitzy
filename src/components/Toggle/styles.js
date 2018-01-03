import { css } from 'emotion';

const toggleBtn = css`
  display: inline-block;
  outline: 0;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  border: 1px solid #e8eae9;

  &:focus:after,
  :active::after {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 1.5px #9c9c9c;
  }

  &::after {
    left: 0;
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 2em;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  &:active:after {
    padding-right: 0.8em;
  }
`;

const toggleInput = css`
  display: none;
`;

const toggleBtnOn = css`
  background: #86d993;
  &::after {
    left: 50%;
  }
  &::active {
    box-shadow: none;

    &:after {
      margin-left: -0.8em;
    }
  }
`;

export { toggleBtnOn, toggleInput, toggleBtn };
