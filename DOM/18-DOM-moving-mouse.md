## mouseover/mouseout, relatedTarget
- `mouseover/out`: When a mouse pointer comes over an element; mouseout - when it leaves.
- `relatedTarget`: Complements target

|mouseover|- event.target: element where the mouse came over<br>- event.relatedTarget: element from which the mouse came |
|---|---|
|mouseout| - event.target: element that the mouse left<br>- event.relatedTarget: new under-the-pointer element|

- relatedTarget can be null, means that the mouse came not from another element, but from out of the window. Or that it left the window.

## Skipping Elements
- The mousemove event triggers when the mouse moves. But that doesn’t mean that every pixel leads to an event.
- if the visitor is moving the mouse very fast then some DOM-elements may be skipped:
- 
