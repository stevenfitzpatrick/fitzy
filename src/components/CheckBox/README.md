CheckBox :

```jsx
initialState = { value: false };

<CheckBox
  onChange={({ target: { checked } }) => setState({ value: checked })}
  checked={state.value}
>
  First Checkbox
</CheckBox>;
```

Disabled CheckBox :

```jsx
initialState = { value: true };

<CheckBox
  onChange={({ target: { checked } }) => setState({ value: checked })}
  checked={state.value}
  disabled
>
  Already checked
</CheckBox>;
```
