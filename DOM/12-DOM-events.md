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
- `elem.removeEventListener(event, handler, [options])`
   - event: Event Name, eg, "click"
   - handler: Handler function
   - options:
     - Additional optional object with properties
     - `once`: if true,  then the listener is automatically removed after it triggers.
     - capture: the phase where to handle the event
     - passive: if true, then the handler will not call preventDefault()
     
- NOTE: `removeEventListener must refer to the exact function when it's added in addEventListener`

```
// DIFFERENT! Can't be removed
elem.addEventListener( "click" , () => alert('Thanks!'));
// ....
elem.removeEventListener( "click", () => alert('Thanks!'));

// SAME. Can be removed
function handler() { alert("Thankssss"); }
elem.addEventListener("click", handler);
elem.removeEventListener("click", handler);
```

- Multiple handlers added =  Multiple function to be executed one by one when event is detected.


## Event Object
- When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
- Some properties of event object:
  - `event.type`: Event type, eg, "click"
  - `event.currentTarget`: Element that handled the event. The 'this', unless the handler is an arrow function.
  - `event.clientX / event.clientY`: Window-relative coordinates of cursor for pointer events.

```
<input type="button" value="Click me" id="elem">

<script>
  elem.onclick = function(event) {
    // show event type, element and coordinates of the click
    
    // click at [object HTMLInputElement]
    alert(event.type + " at " + event.currentTarget);  
    
    // Coordinates: 57:19
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };
</script>
```

## Object handlers: handleEvent
- Assign object to addEventListener. When event occurs, the obj's `handleEvent` method is called.

```
<button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + " at " + event.currentTarget);
    }
  };

  elem.addEventListener('click', obj);
</script>

```

```
<button id="elem">Click Me</button>

<script>
class Menu{
      handleEvent(event){
       switch(event.type){
         case 'mousedown':
            elem.innerHTML = "Mouse button pressed";
         case 'mouseup':
            elem.innerHTML = "Mouse buttom released";
          }
       }
    }
    
    let menu = new Menu();
    elem.addEvenListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
</script>
