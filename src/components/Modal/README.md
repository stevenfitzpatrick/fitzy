Modal :

```jsx
initialState = { visible: false };

<>
  <Button onClick={() => setState({ visible: true })}>Toggle Modal</Button>
  {state.visible && (
    <Modal use="light" onClose={() => setState({ visible: false })}>
      <Modal.Header icon="edit">Add Item</Modal.Header>
      <Modal.Body>Some Light Modal Content</Modal.Body>
      <Modal.Footer>
        <Button use="Secondary">Cancel</Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</>;
```

Dark themed Modal :

```jsx
initialState = { visible: false };

<>
  <Button onClick={() => setState({ visible: true })}>Toggle Modal</Button>
  {state.visible && (
    <Modal use="dark" onClose={() => setState({ visible: false })}>
      <Modal.Header icon="edit">Add Item</Modal.Header>
      <Modal.Body>Some Dark Modal Content</Modal.Body>
      <Modal.Footer>
        <Button use="Secondary">Cancel</Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</>;
```
