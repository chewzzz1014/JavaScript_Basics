## Mouse Events
- `mousedown/mouseup`: Mouse button is clicked or released over an element.
- `mouseover/mouseout`: Mouse pointer comes over/out of a element.
- `mousemove`: Every mouse move over an element triggers that event.
- `click`: Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
- `dbclick`: Triggers after two clicks on the same element within a short timeframe. Rarely used nowadays.
- `contextmenu`: Triggers when the right mouse button is pressed.

## Events Order
- mousedown -> mouseup -> click

## Mouse Button
- Click-related events always have the button property, which allows to get the exact mouse button.
- mousedown and mouseup handlers may need event.button, because these events trigger on any button, so button allows to distinguish between “right-mousedown” and “left-mousedown”

|Button State|event.button|
|---|---|
|Left button (primary) |	0| 
|Middle button (auxiliary)|	1|
|Right button (secondary)|	2|
|X1 button (back)|	3|
|X2 button (forward)|	4|

## Modifiers: shift, alt, ctrl and meta
- `shiftKey`: Shift
- `altkey`: Alt (Opt for Mac)
- `ctrlKey`: Ctrl
- `metakey`: Cmd for Mac
- true if corresponding key was pressed during the event
```
<button id="button">Alt+Shift+Click</button>

<script>
  button.onclick = function(event){
      if(event.altKey && event.shiftKey){
        alert("OK");
      }
  };
</script>
```

## Coordinates: clientX/Y, pageX/Y
- Window-relative: clientX/clientY
- Document-relative: pageX/pageY


## Preventing Copying
```
<div oncopy="alert('Do No Copy!')"; return false;>
   Top Secret
</div>
```
