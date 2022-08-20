## Custom Events

## Event Constructor
- Built-in event class form a hierarchy, similar to DOM element classes
- Root is the built-in Event class
- Create Event object:
- `event`: Event type. Eg, "click" or "my-event" (self-defined event type)
- `options`: Object w/ 2 optional properties
   - `bubbles: true/false`: False by default. If ture, event bubbles.
   - `cancelable: true/false`: False by default. If ture, the "default action" may be prevented
```
let event = new Event(type[, options]);
```

## dispatchEvent
- After event object is created, "run" in on element by calling `elem.dispatchEvent(event)`
- Then, handlers react on it as if it were a regular browser event.

```
<button id="elem" onclick="alert('Click');">Autoclick</button>

<script>
    let event = new Event("click");
    elem.dispatchEvent(event);
</script>
```

## Bubbling of Custom Event
- For code below, first alert "Hello from H1". Follow by displaying content in H1.
```
<h1 id="elem">Hello from the script!</h1>

<script>
   // listener for custom event 
  document.addEventListener("hello", function(event){         // (1)
      alert("Hello from " + event.target.tagName);  // Hello from H1
   });
   
   let event = new Event("hello", {bubbles: true});   // (2)
   elem.dispatchEvent(event);
</script>
```


## Classes for UI Events 
- Examples:
  - UIEvent
  - FocusEvent
  - MouseEvent
  - WheelEvent
  - KeyboardEvent
- Use them instead of `new Event`.
- Specify standard properties for that type of event (not for generic event. Only properties bubbles and cancelable work in Event constructor)

```
let event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,   // not in generic constructor
    clientY: 100  // not in generic constructor
  });
alert(event.clientX);   // 100
```

## Custom Event Class
- For our own, completely new events types like "hello" we should use new CustomEvent
- Technically CustomEvent is the same as Event, with one exception.
- `For CustomEvent, we can add additional property detail for any information that we want to pass with the event`

```
<h1 id="elem"> Hello for John!</h1>

<script>
    elem.addEventListener("hello", function(event){
        alert(event.detail.name);
    });
    
    elem.dispatchEvent(new CustomEvent("hello", {
        detail: {name: "John" }
    }));
</script>
```

## event.preventDefault()
- For new, custom events, there are definitely no default browser actions, but a code that dispatches such event may have its own plans what to do after triggering the event.
- By calling event.preventDefault(), an event handler may send a signal that those actions should be canceled.
- In that case the call to elem.dispatchEvent(event) returns false. And the code that dispatched it knows that it shouldn’t continue. 
- `cancelable` must set to true

```
<pre id="rabbit">
  |\   /|
   \|_|/
   /. .\
  =\_Y_/=
   {>o<}
</pre>
<button onclick="hide()">Hide()</button>

<script>
   function hide(){
      let event = new CustomEvent("hide", { cancelable: true} );
      
      // dispatchEvent() return false, indicating event.preventDefault() is called
      if (!rabbit.dispatchEvent(event)
            alert('The action was prevented by a handler');    // (1)
      else
            rabbit.hidden = true;
      }
      
      rabbit.addEventListener("hide", function(event) {
         if (confirm("Call preventDefault?"))      // (2)
               event.preventDefault();
      });
```


## Events-in-events are synchronous
- Usually events are processed in a queue. That is: if the browser is processing onclick and a new event occurs, e.g. mouse moved, then its handling is queued up, corresponding mousemove handlers will be called after onclick processing is finished.
- The notable exception is when one event is initiated from within another one, e.g. using dispatchEvent. Such events are processed immediately: the new event handlers are called, and then the current event handling is resumed.
- Example below: menu-open event is triggered during the onclick. It’s processed immediately, without waiting for onclick handler to end
```
<button id="menu">Menu (click me)</button>

<script>
  menu.onclick = function() {
    alert(1);     // (1)

    menu.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: true
    }));

    alert(2);     // (3)
  };

  // triggers between 1 and 2
  document.addEventListener('menu-open', () => alert('nested'));     // (2)
</script>
```
- onclick to be fully processed first, independently from menu-open or any other nested events:
```
<button id="menu">Menu (click me)</button>

<script>
  menu.onclick = function() {
    alert(1);

    // wrap it in the zero-delay setTimeout
    setTimeout(() => menu.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: true
    })));

    alert(2);
  };

  document.addEventListener('menu-open', () => alert('nested'));
</script>
```
