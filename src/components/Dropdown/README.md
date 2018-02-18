```jsx
initialState = { value: '' };

const items = [
  {
    id: 'Cars',
    name: 'my cars'
  },
  {
    id: 'Planes',
    name: 'F-16'
  }
];

<Dropdown
  items={items}
  onChange={e => {
    setState({ value: e });
  }}
/>;
```
