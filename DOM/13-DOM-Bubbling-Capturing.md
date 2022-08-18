## Bubbling and Capturing

Examples:
- The handler is assigned to `<div>`, but also run if click on any nested tag like `<em>` or `<code>`
```
<div onclick="alert('The handler')">
    <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

## Bubbling
- **When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.**
- Eg, the output for code below when clicked on <p> : "P" -> "Div" -> "Form"
```
<form onclick="alert('Form')">FORM
    <div onclick="alert('Div')">DIV
        <p onclick = "alert('P')">P</p>
    </div>
</form>
```


## event.Target
- A handler on a parent element can always get the details about where it actually happened.
- The most deeply nested element that caused the event is called a target element, accessible as event.target
- `event.target`: the “target” element that initiated the event, it doesn’t change through the bubbling process.
- `this`: the “current” element, the one that has a currently running handler on it.

```
<form onclick="alert('Form')">FORM        // event.target=FORM, this=FORM
    <div onclick="alert('Div')">DIV       // event.target=DIV, this=FORM (the last that run the handler)
        <p onclick = "alert('P')">P</p>  // event.target=P, this=FORM (the last that run the handler)
    </div>
</form>
```

## Stopping Bubbling
- A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.
- `event.stopPropagation()`: Stops the bubbling upwards, but on the current element all other handlers will run.
- `event.stopImmediatePropagation()`: stop the bubbling and prevent handlers on the current element from running

```
<body onclick="alert(`the bubbling doesn't reach here`)"> // never get executed
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

## Capturing
- 3 phases of event propagation:
  1. Capturing phase: The event goes down to element (ancestor -> element)
  2. Target phase: The event reached the target element 
  3. Bubbling phase: The event bubbles up from element (element -> ancestor)

- Catch an event on the capturing event, set the handler `capture` option to true
- capture: false - default, handler is set on bubbling phase
- capture: true - handler is set on capturing phase
```
elem.addEventListener(..., {capture: true})
// alias to {capture: true}
elem.addEventListener(..., true)
```



