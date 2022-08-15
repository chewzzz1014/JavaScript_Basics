## Coordinates
- Coordinates relative to windoe
  - Similar to position:fixed, calculated from window top/left edge
  - Denote these coordinates as clientX/clientY
- Coordinates relative to document
  - Similar to position:absolute. In document root, calculated from document top/left edge
  - Denote as pageX/pageY

- When scrolling, the document is shifted. Window-relative coordinates of elements change, but document-relative coordinates remain the same.

## getBoundingClientRect
- `elem.getBoundingClientRect`: Returns window coordinates for a minial rectangles that encloses elem as an onject of built-in DOMRect class.
- Main DOMRect properties:
  - x/y: X/Y-coordinates of the rectangle origin relative to window
  - width/height: width/height of ractangle (can be negative)
  - top/bottom: Y-coordinate for the top/bottom rectangle edge
  - left/right: X-coordinate for the left/right rectangle edge
- left = x
- top = y
- right = x + width
- bottom = y + height
- coordinates may be negative (elem above window) or decimal fraction

## elementFromPoint(x, y)
- `document.elementFromPoint(x, y)`: Return the most nested element at window coordinates (x, y)

                // get middle point
                let centerX = document.documentElement.clientWidth / 2;
                let centerY = document.documentElement.clientHeight /2;
                
                let elem= document.elementFromPoint(centerX, centerY);
                
- This method only works if (x, y) are inside the visible area. Else, it will return null. 

## Using for 'fixed' positioning

          // get an element near to another element
          ...
          let m = document.createElement("div");
          m.style.cssText = "position:fixed; color: red";
          
          let coords = elem.getBoundingClientRect();
          m.style.left = coords.left +  "px";
          m.style.right = coords.bottom + "px";
