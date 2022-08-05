- All operations start with the `document` object, the main "entry point" to DOM.
- In DOM, null means doesn't exist or no such node.

## documentElement and body
- Topmost tree nodes are available directly as document properties.
- `<html>` = `document.documentElement`
- `<body>` = `document.body`
- `<head>` = `document.head`

## Children: childNodes, firstChild, lastChild
- Child nodes (or children): Elements that're direct children (nested exactly in the given one). Eg. `<head>` and `<body>` are children of `<html>`.
- Descendants: All elements that're nested in the given one, including children, their children and so on.
- `document.body.childNodes` : List all child nodes, including text nodes
             
      ...
      alert(document.body.childNodes);
      // [object Text], [objectHTMLScriptElement], [objectHTMLDivElement]...
  
  
- `document.firstChild`: Give fast access to the first children.
- `document.lastChild`: Give fast access to the last element.
  
  
      elem.childNodes[0] === elem.firstChild
      elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
  
- `elem.hasChildNodes()`: Check whether there are any child nodes.
  
  
## DOM Collections
- `childNodes` is a collection, a special array-like iterable object.
- This means that:
  1. Use for...of to iterate over it
      
  
      for (let node of document.body.childNodes){
              alert(node); 
         }
  
  
  2. Array methods won't work (it's not an array)
  
        // use Array.from to create a 'real' array from collection
        alert( Array.from(document.body.childNodes).filter );   // array method
  
  
- DOM collections are read-only. Cannot replace a child by assigning. Eg: childNodes[i] = ... 
- DOM collections are live and reflect the current state of DOM. After add/remove nodes into DOM, then they appear in the collection automatically.
- Don't use `for...in` to loop over collections.
  
  
  ## Siblings and Parent
- Siblings are children of the same parent.
- Eg, `<head>` is said to be the "previous" or "left" siblings of `<body>`
- Eg, `<body>` is said to be the "next" or "right" siblings of `<head>`
- `document.parentNode`: Parent node of the obj before the comma
- `document.nextSibling`: Next sibling of the obj before the comma
- `document.previousSibling`: Previous sibling of the obj before the comma


      <html>
        <head>...</head><body>...</body>
       </html>
       
       
       alert( document.body.parentNode === document.head.parentNodes); // true
       alert(document.head.nextSibling);   // HTMLBodyElement
       alert(document.body.previousSibling);  // HTMLHeadElement
  
  
 ## Element-only navigation
 - How to exclude text node and comment node? Use `Element` word inside.
 - `children`: Children that're element nodes
 - `firstElementChild` : First element children
 - `lastElementChild` : Last element children
 - `previousElementSibling` : Previous neighbor elements
 - `nextElementSibling` : Next neighbor elements
 - `parentElement` : Parent element
 - `parentElement` returns the “element” parent, while `parentNode` returns “any node” parent
 
 
         alert( document.documentElement.parentNode ); // document
         alert( document.documentElement.parentElement ); // null 
         // document.documentElement (the root nodes) has document as its parent
         // document is not an element node
  
  
## Table 
- `table.rows` : Collection of `<tr>` element
- `table.rows[i].cells[i]` : Specifying the coordinate of a cell at (rows[i], cells[i])
- `table.caption/tHead/tFoot`: References to elements `<caption>`, `<thead>`, `<tfoot>`
- `table.tBodies` : Collection of `<tbody>` element
- `tr.cells` : the collection of <td> and <th> cells inside the given `<tr>`.
- `tr.sectionRowIndex` : the position (index) of the given `<tr>` inside the enclosing `<thead>/<tbody>/<tfoot>`.
- `tr.rowIndex` : the number of the `<tr>` in the table as a whole (including all table rows).

  
                  <table id="table">
                    <tr>
                      <td>Row 1, Column 1</td><td>Row 1, Column 2</td>
                    </tr>
                    <tr>
                      <td>Row 1, Column 1</td><td>Row 2, Column 2</td>
                    </tr>
                  </table>

                <script>
                  // get td with "two" (first row, second column)
                  let td = table.rows[0].cells[1];
                  td.style.backgroundColor = "red"; // highlight it
                </script>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
