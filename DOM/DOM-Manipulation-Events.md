## Document Object Model, DOM
- Tree-like representation of the contents of a web page. A tree of "nodes" with different relationships depending on how they're arranged in the HTML document.

## Targeting Nodes with Selectors
- Use a combination of CSS-style selectors and relationship properties to target the nodes.

                <div id = "container"></div>
                  <div class = "display"></div>
                  <div class = "controls"></div>
                </div>
                
- Selectors for `<div class = "display"></div>` :
  - `div.display`
  - `.display`
  - `#container>.display`
  - `div#container>div.display`
  
  
                // selecting node
                
                const container = document.queryContainer("#container");
                
                console.dir(container.firstElementChild); // select div.display
                
                const controls = document.querySelector(".controls");
                
                console.dir(controls.previousElementSibling(; // select div.display
                
## Element Creation
- `document.createElement(tagName, [options])`: Creates a new element of tag type tagName.
- Creating without placing in DOM
    
                const div = document.createElement("div");
                
## Append Elements
- `parentNode.appendChild(childNode)`: Appends childNode as the ;ast child of parentNode.
- `parentNode.insertBefore(newNode, referenceNode)`: Insert newNode into parentNode before referenceNode

## Remove Elements
- `parentNode.removeChild(child)`: Removes child from parentNode on the DOM and returns a reference to child.

## Altering Elements

                div.style.color = "red";
                
                div.style.cssText = "color: blue; background: white;";
                
                div.setAttribute("style", "color: blue; background: white;");
                
                
                
                
                
                
                
                
                
                
                
                
