Popper Dropdown :

```jsx
initialState = { value: '' };

const items = [
  {
    value: 'WIN',
    label: 'Win'
  },
  {
    value: 'LOSS',
    label: 'Loss'
  },
  {
    value: 'VOID',
    label: 'Void'
  }
];

function dropDownMenu({ getItemProps, getMenuProps, itemToString }) {
  return (
    <ul {...getMenuProps()}>
      {items.map((item, index) => {
        return (
          <li
            {...getItemProps({
              item,
              key: index
            })}
          >
            {itemToString(item)}
          </li>
        );
      })}
    </ul>
  );
}

<Popper renderMenu={dropDownMenu}>
  {({ getToggleButtonProps }) => <div {...getToggleButtonProps()}>lol</div>}
</Popper>;
```
