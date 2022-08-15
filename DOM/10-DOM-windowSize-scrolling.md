## Window Size and Scrolling

## Width / Height of Window
- `documentElement.clientHeight`: Window height without scrollbar
- `documentElement.clientWidth`: Window width w/o scrollbar

## Width / Height of Document
- What if, there's no scroll such that documentElement.scrollHeight < documentElement.clientHeight ?
- To safely obtain the full document height:
          
          
          let scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );

        alert('Full document height, with scrolled out part: ' + scrollHeight);

## Get Current Scroll
- DOM elements have their current scroll state in `scrollLeft/scrollTop` properties; whereas for document scroll, `document.documentElement.scrollLeft/scrollTop` works in most browsers(except some olders ones)
- Instead of memorising when to use document.body or document.documentElement, we can use:

           console.log("Current scroll from the top: "+window.pageYOffset);
           console.log("Current scroll from the left: "+window.pageXOffset);
           

## Scrolling
- `window.scrollBy(x, y)`: Scrolls the page relative to its current position. Eg, scrollBy(0, 10) scrolls the page 10px down
- `window.scrollTo(pageX, pageY)`: Scrolls the page to absolute coordinates such that top-left corner of visible part has coordinates (pageX, pageY). Eg, scrollTo(0, 0) will scroll to very beginning.
- `elem.scrollIntoView(top)`: Scrolls the page to make elem visible. 
   - If `top=true`, scroll till elem appears on the top of window. Upper edge of element will be aligned w/ window top.
   - If `top=false`, scrolls elem appears at the bottom. Bottom edge of element will be aligned with window bottom.

## Forbid Scrolling
- `document.body.style.overflow = "hidden"`: Male document unscrollable and scrollbar will disappear

            // make document unscrollable
            document.body.style.overflow = "hidden"
            
            // make it scrollable again
            document.body.style.overflow = ''
