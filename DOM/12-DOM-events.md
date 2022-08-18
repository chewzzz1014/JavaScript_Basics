## Browser Events
- Event: Signal that smth has happened.
- Example of DOM events:
1. Mouse Events:
   - click: when the mouse clicks on an element 
   - contextmenu: right-click on an element
   - mouseover/mouseout: mouse cursor comes over / leaves an element.
   - mousedown / mouseup – mouse button is pressed / released over an element.
   - mousemove – when the mouse is moved.
2. Keyboard Events:
   - keydown and keyup – when a keyboard key is pressed and released.
3. Form element events:
   - submit: when submits a `<form>`
   - focus: focus on an element, such as an `<input>`
4. Document events
   - DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.
5. CSS Events
   - transitionend – when a CSS-animation finishes.

## Event Handler
- A function that runs in case of an event
- Ways to handler a handler:

1. HTML-attribute
   - When mouce click on the button, code inside onclick runs.
```
<input value = "Click Me" onclick = "alert('Clicked')" type="button">
```
```
<script>
  function countStars(){
    for (let i=1; i<=3; i++)
        console.log(`# Star ${i}`);
   }
</script>

<input type="button" onclick="countStars()" value = "Counting starts...">
```

2. DOM Property
   - Assign a handler usign DOM property `on<event>`
   - Note: Should be `elem.onclick = greet;` instead of `elem.onclick = greet();`
   - greet() is a function call that return the result of execution (undefined if not returning any value)

```
<input id="elem" type="button" value="Clicke Me">
<script>
  elem.onclick = function()[
        console.log("Thankssss");
   };
</script>
```

3. addEventListener
- `elem.addEventListener(event, handler, [options])`
   - event: Event Name, eg, "click"
   - handler: Handler function
   - options:
     - Additional optional object with properties
     - `once`: if true,  then the listener is automatically removed after it triggers.
     - capture: the phase where to handle the event
     - passive: if true, then the handler will not call preventDefault()










