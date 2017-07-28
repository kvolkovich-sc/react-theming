### Synopsis

DemoComponent of react application generator.

### Props Reference

| Name                           | Type                    | Description                                                 |
| ------------------------------ | :---------------------- | ----------------------------------------------------------- |
| label                          | string                  | Label of button                                             |
| onClick                        | func                    | Callback fired on button click                              |

### Code Example

```
<DemoComponent 
  label={`App running on ${_showroom.env.HOST}:${_showroom.env.PORT}`}
  onClick={() => { console.log('Welcome to showroom') }}
/>
```

### Component Name

DemoComponent

### License

Licensed by © 2017 OpusCapita

