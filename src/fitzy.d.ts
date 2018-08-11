declare module 'fitzy' {
  import * as React from 'react';

  export interface InputProps {}
  export interface DropdownProps {}
  export interface PopperProps {
    onChange?: (selectedItem: any) => void;
  }

  export class Input extends React.Component<InputProps, any> {}
  export class Dropdown extends React.Component<DropdownProps, any> {}
  export class Popper extends React.Component<PopperProps, any> {}
}
