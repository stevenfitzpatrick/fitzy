Basic Input :

```jsx
initialState = { value: '' };

<Input
  placeholder="Enter your name"
  name="name1"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
/>;
```

Dark :

```jsx
initialState = {
  username: '',
  password: '',
  name: 'John Doe',
  email: 'johndoe.com'
};

<div className="flex dark column">
  <Input
    label="Username"
    placeholder="Enter your name"
    name="username"
    value={state.username}
    onChange={(_, v) => setState({ username: v })}
    required
  />
  <Input
    label="Password"
    placeholder="Enter your password"
    name="password"
    value={state.password}
    onChange={(_, v) => setState({ password: v })}
    required
  />
  <Input
    label="Email"
    placeholder="Enter your email"
    name="email2"
    value={state.email}
    onChange={(_, v) => setState({ email: v })}
    warning={<span>Invalid Email</span>}
    required
  />
  <Input
    label="goodbye"
    placeholder="Enter your name"
    name="name"
    value={state.name}
    onChange={(_, v) => setState({ name: v })}
    required
  />
</div>;
```

Input with warning :

```jsx
initialState = { value: '' };

<Input
  label="Name"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
  warning={<span>Some Warning</span>}
/>;
```

Input with label :

```jsx
initialState = { value: '' };

<Input
  label="Name"
  name="name2"
  value={state.value}
  onChange={(_, v) => setState({ value: v })}
  autoComplete="username"
  required
/>;
```
