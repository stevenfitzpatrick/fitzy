Modal :

```jsx
initialState = { visible: false };

<>
  <Button onClick={() => setState({ visible: true })}>Toggle Modal</Button>
  {state.visible && (
    <Modal onClose={() => setState({ visible: false })}>
      <Modal.Header icon="edit">Add Item</Modal.Header>
      <Modal.Body>
        Some Modal Content
        <Dropdown
          items={['Soccer', 'Basketball']}
          placeholder="Select Sport Type"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button use="Secondary">Cancel</Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  )}
</>;
```
