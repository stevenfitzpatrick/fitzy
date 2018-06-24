Modal :

```jsx
initialState = { visible: false };

<>
  <Button onClick={() => setState({ visible: true })}>Toggle Modal</Button>
  {state.visible && (
    <Modal onClose={() => setState({ visible: false })}>
      Some Modal Content
    </Modal>
  )}
</>;
```
