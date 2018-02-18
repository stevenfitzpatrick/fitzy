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
  onBlur={e => console.log('hi')}
/>;
```

Dropdown with default selected item :

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
  defaultInputValue="Planes"
  onChange={e => {
    setState({ value: e });
  }}
  onBlur={e => console.log('hi')}
/>;
```
