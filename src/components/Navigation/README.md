Navigation :

```jsx
<div className="fixed-frame flex column dark">
  <Navigation>
    {Layout => (
      <>
        <Layout.Left>
          <ul>
            <li>
              <NavigationLink href="/" icon="home">
                Home
              </NavigationLink>
            </li>
            <li>
              <Button icon="edit">Add Bet</Button>
            </li>
          </ul>
        </Layout.Left>
        <Layout.Right>
          <ul>
            <li>
              <NavigationLink href="/" icon="user">
                Logout
              </NavigationLink>
            </li>
          </ul>
        </Layout.Right>
      </>
    )}
  </Navigation>
</div>
```

Left Only :

```jsx
<div className="fixed-frame flex">
  <Navigation>
    {Layout => (
      <>
        <Layout.Left>Logout</Layout.Left>
      </>
    )}
  </Navigation>
</div>
```

Right Only :

```jsx
<div className="fixed-frame">
  <Navigation>
    {Layout => (
      <>
        <Layout.Right>Logout</Layout.Right>
      </>
    )}
  </Navigation>
</div>
```
