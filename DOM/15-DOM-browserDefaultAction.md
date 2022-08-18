## Browser Defaukt Actions
- Examples of default action in browser:
  - A click on a link – initiates navigation to its URL.
  - A click on a form submit button – initiates its submission to the server.
  - Pressing a mouse button over a text and moving it – selects the text.

## Preventing Browser Actions
1. Use event object. The method `event.preventDefault()`
2. If the handler is assigned using on<event> (**not by addEventListener**), then returning false also works the same.
  
```
  // method 1
  <a href="/" onclick="return false">Click Here</a>
  or 
  // method 2
  <a href="/" onclick="event.preventDefault()">here</a>
```
  
```
  // handle click in js: prevent navigate to link 
 menu.onclick = function(event){
  if (event.target.nodeName != 'A') return;
  
  let href = event.target.getAttribute("href");
  alert(href);    // print the link
  
  return false;   // prevent browser action
```

## Passive Handler Option
- The optional passive: true option of addEventListener signals the browser that the handler is not going to call preventDefault()
 
## event.defaultPrevented
- `event.defaultPrevented`: Is ture if default action was prevented, and false otherwise
- Examples of use case:
  
- When right-clicked on elem, oncontextmenu for document will be executed too due to bubbling
```
  <p>Right-click here for the document context menu</p>
  <button id="elem">Right-click here for the button context menu</button>
  
  <script>
     // right click on element
     elem.oncontextmenu = function(event){
          event.preventDefault();       // won't show context menu after right click
          alert('Button context menu');
    };
    
    //right click on document
    document.oncontextmenu = function(event){
          event.preventDefault();    // won't show context menu after right click
          alert('Document context menu');
    };
  </script>
```
  
- There's the case where we need to check on event.defaultPrevented. If the default action was prevented, then the event is handled and we no need to react on it.
```
<p>Right-click here for the document context menu</p>
<button id="elem">Right-click here for the button context menu(fixed with event.stopPropagation)</button>
  
<script>
   // right click on element
   elem.oncontextmenu = function(event){
        event.preventDefault();       // won't show context menu after right click
        alert('Button context menu');
  };
    
  //right click on document
  document.oncontextmenu = function(event){
        // are the default action prevented?
        if (event.defaultPrevented) return;   
        
        event.preventDefault();    // won't show context menu after right click
        alert('Document context menu');
  };
</script>
```
