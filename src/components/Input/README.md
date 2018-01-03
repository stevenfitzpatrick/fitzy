Basic Input :

```jsx
initialState = { value: '' };

<Input
  placeholder="Enter your name"
  name="name"
  value={state.value}
  onChange={v => setState({ value: v })}
/>;
```

Input disabled :

```jsx
initialState = { value: '' };

<Input
  value={state.value}
  onChange={v => setState({ value: v })}
  disabled={true}
/>;
```

Input with label :

```jsx
initialState = { value: '' };

<Input
  label="Name"
  name="name"
  value={state.value}
  onChange={v => setState({ value: v })}
/>;
```

Input with hint :

```jsx
initialState = { value: '' };

<Input
  hint="Short and Unique"
  name="name"
  value={state.value}
  onChange={v => setState({ value: v })}
/>;
```

Input as textarea :

```jsx
initialState = { value: '' };

<Input
  name="name"
  type="textarea"
  value={state.value}
  onChange={v => setState({ value: v })}
/>;
```
