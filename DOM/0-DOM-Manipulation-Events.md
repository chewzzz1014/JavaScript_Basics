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
                
                
## Editing Attributes

                div.setAttribute("id", "theDiv");
                
                div.getAttribute("id");
                
                div.removeAttribute("id");
                
## Working with Classes

                div.classList.add("new");
                
                div.classList.remove("new");
                
                div.classList.toggle("active");
                
                
## Adding Text Content
  
  
                div.textContent = "Hello World";
                
## Adding HTML Content

                div.innerHTML = "<span>Hello World!</span>";
                
                
## Events
- Event: Actions that occure on the webpage
- Ways to listen and react to events:
  1. Attach functions' attributes directly on HTML elements
  2. Set the "on_event" property on the DOM object in JS
  3. Attach event listeners to nodes in JS
  
  
## Attach functions' attributes directly on HTML elements

                <button id="btn">Click Me Too</button>
                
                <script>
                    const btn = document.querySelector('#btn');
                    btn.addEventListener('click', () => {
                      alert("Hello World");
                    });
                    
                    
                    btn.addEventListener("click", greet);
                    function greet(){ alert("Hiiii");  }
                 </script>
                
 ## Callback               
 - function(e) is a callback from addEventListener
 - The `e` is an object that references the event itself               
                
                   // function (e) is a callback from addEventListener
                    btn.addEventListener("click", function(e){
                        console.log(e.target);  // [object HTMLButtonElement]
                      });
                      
                    
                    btn.addEventListener('click', function (e) {
                    e.target.style.background = 'blue';
                  });

## Attaching Listeners to Groups of Nodes
- Use `querySelectorAll(css)` to get an iterable of all targets.

                  <div id="container">
                      <button id="1">Click Me</button>
                      <button id="2">Click Me</button>
                      <button id="3">Click Me</button>
                  </div>
                  
                  <script>
                      const buttons = document.querySelectorAll("button");
                      buttons.forEach( (button) => {
                          alert(button.id);
                      });
                  </script>

## Some Other Events
- click
- dblclick
- keydown
- keyup
