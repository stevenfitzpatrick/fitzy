AutoComplete with default selected item :

```jsx
initialState = { value: '' };

const items = [
  {
    value: '1',
    label: 'Cards'
  },
  {
    value: '2',
    label: 'Planes'
  }
];

<AutoComplete
  items={items}
  onChange={selection => alert(`You selected ${selection}`)}
  defaultSelectedItem={items[1]}
  itemToString={item => (item ? item.label : '')}
/>;
```

```jsx
initialState = { value: '' };

const items = [
  {
    value: '1',
    label: 'Cards'
  },
  {
    value: '2',
    label: 'Planes'
  }
];

<AutoComplete
  items={items}
  onChange={selection => alert(`You selected ${selection}`)}
  itemToString={item => (item ? item.label : '')}
/>;
```
