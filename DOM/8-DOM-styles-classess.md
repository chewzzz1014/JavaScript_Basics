## Styles and Classes

## className & classList
- `elem.className`: Get the cass name of a HTML element

            <body class="main menu">
              <script>
                alert(document.body.className); // main menu
              </script>
            </body>
            
- `elem.classList`: An iterable special object with methods to add/remove/toggle a single class.
- `elem.classList.add("class")`: Add class
- `elem.classList.remove("class")`: Remove class
- `elem.classList.toggle("class")`: Add the class if it doesn't exist. otherwise remove it
- `elem.classList.contains("class")`: Check for the given class and return true/false

        <body class="main menu">
           <script>
              
             alert(document.body.className); // main menu
                
             document.body.classList.add("items"); // add className
                
             for(let name of document.body.classList)
                 alert(name); // main, menu. items
           </script>
         </body>
            
## Element Style
- Corresponds to what's written in the "style" attribute.   
        
        elem.style.backgroundColor
        elem.style.zIndex
        elem.style.borderLeftWidth
            
            
## Resetting Style Property
- `elem.style.display = "none"` hide an element
- Then, `elem.style.display = ""` will result the element back to normal


        // if we run this code, the <body> will blink
        document.body.style.display = "none"; // hide

        setTimeout(() => document.body.style.display = "", 1000); // back to normal
  
- `elem.style.removeProperty("style property")` remove a style property

        document.body.style.background = 'red'; //set background to red

        setTimeout(() => document.body.style.removeProperty('background'), 1000); 

          
## CSS Units (px...)
- Include CSS unit when assigning size to CSS property

        document.body.style.margin = '20px';
        alert(document.body.style.margin); // 20px

## getComputerStyle
- The style property operates only on the value of the "style" attribute, without any CSS cascade.
- So we can’t read anything that comes from CSS classes using elem.style.
- `getComputedStyle(element, [pseudo])`: To read the resolved styles (with respect to all classes, after all CSS is applied and final values are calculated)
- `element`: Element to read value for
- `pseudo`:  A pseudo-element if required, for instance `::before`. Empty string or no argument means the element itself


            <head>
              <style> body { color: red; margin: 5px } </style>
            </head>
            <body>
                // can't access directly
                alert(document.body.style.color);           // empty
                alert(document.body.style.marginTop);      // empty

                let computedStyle = getComputedStyle(document.body);
                alert( computedStyle.marginTop );           // 5px
                alert( computedStyle.color );        // rgb(255, 0, 0)

            </body>
