```jsx
const RadioOption = require('./RadioOption').default;

initialState = { value: 'xl' };
<>
  <div>Selected Value: {state.value}</div>
  <RadioGroup
    name="tshirt_sixes"
    value={state.value}
    onChange={v => setState({ value: v })}
  >
    <RadioOption value="xl" icon="football">Football</RadioOption>
    <RadioOption value="xs" icon="soccer">Soccer</RadioOption>
  </RadioGroup>
</>
```
