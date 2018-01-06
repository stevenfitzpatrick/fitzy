```js
initialState = { event: '' };

<EventManager
  onFocus={() => setState({ event: 'onFocus' })}
  onBlur={() => setState({ event: 'onBlur' })}
  onMouseEnter={() => setState({ event: 'onMouseEnter' })}
  onMouseLeave={() => setState({ event: 'onMouseLeave' })}
>
  {({ getProps }) => {
    return (
      <div
        {...getProps({ onFocus: () => console.log('focus'), id: 'focusInput' })}
      >
        <input type="text" value={state.event} id="focusinput" />
      </div>
    );
  }}
</EventManager>;
```
