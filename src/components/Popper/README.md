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

function dropDownMenu({
  getItemProps,
  getMenuProps,
  itemToString,
  Menu,
  MenuItem
}) {
  return (
    <Menu {...getMenuProps()}>
      {items.map((item, index) => {
        return (
          <MenuItem
            {...getItemProps({
              item,
              key: index
            })}
          >
            {itemToString(item)}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

<Popper renderMenu={dropDownMenu} onChange={item => console.log(item)}>
  {({ getToggleButtonProps }) => (
    <IconButton icon="more" {...getToggleButtonProps()} />
  )}
</Popper>;
```
