```jsx
initialState = { value: '' };

<Password
  upperCase={true}
  lowerCase={true}
  over6={true}
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```
