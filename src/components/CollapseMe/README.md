Basic Input :

```jsx
initialState = { open: false };

<>
  <Button
    onClick={() =>
      setState(({ open }) => ({
        open: !open
      }))
    }
  >
    Toggle Content
  </Button>
  <CollapseMe open={state.open}>
    {() => (
      <>
        <p>Some content will go here</p>
        <p>Some content will go here</p>
      </>
    )}
  </CollapseMe>
  <Button>Some Other Bottom</Button>
</>;
```
