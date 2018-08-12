MenuDropdown Dropdown :

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

function iconButton({ getToggleButtonProps, ref }) {
  return <IconButton icon="more" innerRef={ref} {...getToggleButtonProps()} />;
}

<MenuDropdown
  renderButton={iconButton}
  onChange={item => console.log(item)}
  width={12}
>
  {({
    getItemProps,
    getMenuProps,
    itemToString,
    Menu,
    MenuItem,
    selectedItem,
    highlightedIndex
  }) => (
    <Menu {...getMenuProps({ refKey: 'innerRef' })}>
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
  )}
</MenuDropdown>;
```
