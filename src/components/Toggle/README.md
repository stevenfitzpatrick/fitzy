```jsx
<Toggle onToggle={on => console.log('toggle', on)} className="toggle">
  <Toggle.On>On</Toggle.On>
  <Toggle.Button />
  <Toggle.Off>Off</Toggle.Off>
</Toggle>
```

With Default State set to on

```jsx
<Toggle onToggle={on => console.log('toggle', on)} defaultOn className="toggle">
  <Toggle.Button />
</Toggle>
```
