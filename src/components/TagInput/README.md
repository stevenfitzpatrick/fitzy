```jsx
initialState = { items: ['apple', 'orange', 'carrot'] };

<TagInput
  items={state.items}
  onAdd={tag => setState({ items: [...state.items, tag] })}
  onRemove={tag =>
    setState({
      items: state.items
        .map((item, i) => (i == tag ? '' : item))
        .filter(Boolean)
    })
  }
  render={({ items, getInputProps, getTagProps }) => (
    <div>
      {items.map((tag, i) => (
        <Tag tagId={i} key={tag} {...getTagProps({})}>
          {tag}
        </Tag>
      ))}
      <input
        {...getInputProps({ placeholder: 'Favourite Fruit', type: 'text' })}
      />
    </div>
  )}
/>;
```
