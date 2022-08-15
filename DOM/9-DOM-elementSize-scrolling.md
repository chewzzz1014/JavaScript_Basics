## Element Size and Scrolling

## offsetParent, offsetLeft/Top
- `offsetParent`: Nearest ancestor that browser uses for calculating coordinates during rendering
- Examples of nearest ancestor (any one):
  - CSS-positioned: absolute, relative, fixed or sticky (eg, position: absolute)
  - `<td>, <th>, <table>`
  - `<body>`
- `offsetLeft/offsetTop`: Provide x/y coordinates relative to offsetParent upper-left corner
  
      <main style="position: relative" id="main">
         <article>
          <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
         </article>
      </main>
      <script>
        alert(example.offsetParent.id); // main
        alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
        alert(example.offsetTop); // 180
      </script>
      
- offsetParent is null for:
  - not shown elements (display:none or not in the document)
  - `<body>` and `<html>`
  - elements with position: fixed

## offsetWidth/Height
- The outer width/height of elements where its full size including borders.
- offsetWidth = inner CSS-width + 2\*padding + 2\*borders

## clientTop/Left
- clientLeft: Left border width (precisely, the relative coordinates of the inner side from the outer side)
- clientTop: Top border width (precisely, the relative coordinates of the inner side from the outer side)
- Eg, for op in Arabic/Hebrew language, scroll bar is at left. clientLeft include scrollBar width too.

## clientWidth/Height
- Size of area inside element borders
- Include the content width together with paddings but without scrollbar

## scrollWidth/Height
- Like clientWidth/clientHeight, but include the scrolled out parts

            // expand the element to view all scrolled out parts
            element.style.height = `${element.scrollHeight}px`;
            
## scrollLeft/scrollTop
- Width/height of the hidden, scrolled out part of the element
- scrollLeft/scrollTop can be modified. `elem.scrollTop +=` 10 makes the element content scroll 10px down.

## Why avoid taking width/height from CSS
- CSS width/height depend on box-sizing
- CSS width/height may be auto, eg, an inline element
