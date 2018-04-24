Navigation :

```jsx
<Navigation>
  {Layout => (
    <>
      <Layout.Left>Logout</Layout.Left>
      Something
      <Layout.Right>Logout</Layout.Right>
    </>
  )}
</Navigation>
```

Left Only :

```jsx
<Navigation>
  {Layout => (
    <>
      <Layout.Left>Logout</Layout.Left>
    </>
  )}
</Navigation>
```

Right Only :

```jsx
<Navigation>
  {Layout => (
    <>
      <Layout.Right>Logout</Layout.Right>
    </>
  )}
</Navigation>
```
