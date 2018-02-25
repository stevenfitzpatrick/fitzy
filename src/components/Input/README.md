Basic Input :

```jsx
initialState = { value: '' };

<Input
  placeholder="Enter your name"
  name="name"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
/>;
```

Input with warning :

```jsx
initialState = { value: '' };

<Input
  label="Name"
  placeholder="Enter your name"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
  warning={<span>Some Warning</span>}
/>;
```

Input with label :

```jsx
initialState = { value: '' };

<Input
  label="Name"
  name="name"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
  autoComplete="username"
  required
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
