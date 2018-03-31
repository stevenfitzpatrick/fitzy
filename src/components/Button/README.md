Basic :

```jsx
<div className="flex spread">
  <Button>Login</Button>
  <Button use="Warning">Login</Button>
  <Button use="Error">Login</Button>
  <Button use="Info">Login</Button>
  <Button use="Success">Login</Button>
</div>
```

Dark Background :

```jsx
<div className="flex spread dark">
  <Button onClick={e => console.log(e)}>Login</Button>
  <Button use="Warning">Login</Button>
  <Button use="Error">Login</Button>
  <Button use="Info">Login</Button>
  <Button use="Success">Login</Button>
</div>
```

Secondary:

```jsx
<Button use="Secondary">Save</Button>
```

Full width :

```jsx
<Button fullWidth>Login</Button>
```

Loading :

```jsx
<Button loading disabled>
  Loading
</Button>
```

Disabled :

```jsx
initialState = { value: '' };

<Button disabled>Login</Button>;
```
