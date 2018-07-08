Dropdown with default selected item :

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

<Dropdown
  items={items}
  onChange={selection => alert(`You selected ${selection.value}`)}
  defaultSelectedItem={items[1]}
  itemToString={item => (item ? item.label : '')}
/>;
```

Dropdown can also handle primitives :

```jsx
initialState = { value: '' };

const primitives = ['Cards', 'Planes'];

<Dropdown
  items={primitives}
  onChange={selection => alert(`You selected ${selection}`)}
  defaultSelectedItem={primitives[1]}
/>;
```

Dropdown can also handle be supplied placeholder :

```jsx
initialState = { value: '' };

const primitives = ['Cards', 'Planes'];

<Dropdown
  items={primitives}
  onChange={selection => alert(`You selected ${selection}`)}
  defaultInputValue="Please pick an item"
/>;
```
