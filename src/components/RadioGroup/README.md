```jsx
const RadioOption = require('./RadioOption').default;

initialState = { value: 'xl' };

<RadioGroup name="tshirt_sixes" value={state.value} onChange={(v) => setState({ value: v })}>
    <RadioOption value="xl">XL</RadioOption>
    <RadioOption value="xs">XS</RadioOption>
</RadioGroup>
```