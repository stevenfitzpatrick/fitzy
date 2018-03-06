Error Alert :

```jsx
initialState = { value: '' };

<Alert title="Authentication Error" onCancel={() => {}}>
  Oops, looks like an issue has occured.
</Alert>;
```

Warning Alert (without close button):

```jsx
initialState = { value: '' };

<Alert title="Trouble Ahead" level="Warning">
  Iceberg dead ahead.
</Alert>;
```

Success Alert :

```jsx
initialState = { value: '' };

<Alert title="Success !" level="Success" onCancel={() => {}}>
  This operation has succeeded.
</Alert>;
```
