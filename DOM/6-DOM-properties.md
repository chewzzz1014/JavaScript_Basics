## Attributes and Properties
- `HTML Tags -> DOM Objects`
- `HTML Tag's Standard Attributes -> DOM Properties`
- When browser loads the page, it parses the HTML and generates DOM objects from it.
- Eg, for the tag `<body id="page>`, the DOM object has `body.id="page"`

## DOM properties
- DOM nodes are regular JS objects

            // adding property to the object
            document.body.myData = {
                name: "Put Name Here",
                title: "Put Title Here",
                sayTagName(){
                    alert(this.tagName);
                },
            };
              
            // treat like js object
            console.log(document.body.myData.title);  // Put Title Here
            document.body.myData.sayTagName();
            
- Also allowed to modify build-in prototype like Elementprototype and add new methods to all elements.

            
            
            Element.prototype.greet = function(){
              alert(`Hi! I'm ${this.tagName}`);
            }
            
            document.documentElement.greet(); //Hi, I'm HTML
            document.body.greet();  //Hi, I'm BODY
            
 ## HTML Attributes
 - `HTML Tags -> DOM Objects`
 - `HTML Tag's Standard Attributes -> DOM Properties`
 - When browser parses HTML to create DOM object for tags, it recognizes `standard attributes` and creates DOM properties drom them.
 - When an element has id or another standard attribute, the corresponding property gets created. Not for the case for non-standard attribute.
 - Note that standard attribute for one element can be unknown for another one. Eg, in `<body id="body" type="...">`, `type` is standard attribute; for `<input id="input" type="...">`, `type` is non-standard attribute.
 
 
           <body id="test" something="non-standard">
              <script>
                  // automatically create DOM properties 
                  alert(document.body.id);  // test
                  
                  // non-standard attribute did not yield DOM property
                  alert(document.body.something);   // undefined
               </script>
           </body>
           
  
  ## Accessing HTML Standard Attributes
 - HTML attributes are case-insensitive and their values are always strings.
 - `Attribute = name` and `Value of attribute = value`
 
 
  |Method|Function|
  |......|........|
  |elem.hasAttribute(name)|Checks for existence of attribute|
  |elem.getAttribute(name)| Gets the value of attribute |
  |elem.setAttribute(name, value) | Sets the value of attribute|
  |elem.removeAttribute(name) | Removes the attribute|
  
  
       <body>
          <div id="elem" about="Elephant"></div>
                   
            <script>
               console.log(elem.hasAttribute("About")); 
               // true, attribute name is case-insensitive
                       
               console.log(elem.getAttribute("About"));  
               // Elephant
                      
               elem.setAttribute("Test", 123));  
               //Add Test = "123", value of attribute is always string
                        
               console.log(elem.outerHTML);  
               // <div id="elem" about="Elephant" Test= "123"></div>
                        
               for(let att of elem.attributes)
                    console.log(`${att.name} = ${att.value}`);
            </script>
        </body>
 
 ## Property-Attribute Synchronization
 - When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) vice versa
 
          
           <input>
           
              <script>
                let input = document.querySelector('input');

                // attribute => property
                input.setAttribute('id', 'id');
                alert(input.id); // id (updated)

                // property => attribute
                input.id = 'newId';
                alert(input.getAttribute('id')); // newId (updated)
              </script>
 
 - There're exclusions too. Eg, input.value synchronizes only from attribute → to property, but not back:
 
          <input>

            <script>
              let input = document.querySelector('input');

              // attribute => property
              input.setAttribute('value', 'text');
              alert(input.value); // text

              // NOT property => attribute
              input.value = 'newValue';
              alert(input.getAttribute('value')); // text (not updated!)
            </script>
 
 
 ## DOM Properties are Typed
 - DOM Properties are not always strings when accessing it using the object's property way
 
           <input id="input" type="checkbox" checked> checkbox

            <script>
              alert(input.getAttribute('checked')); 
              // the attribute value is: empty string
              
              alert(input.checked);
              // the property value is: true
            </script>
 
 
 
             <div id="div" style="color:red;font-size:120%">Hello</div>

            <script>
              // string
              alert(div.getAttribute('style')); // color:red;font-size:120%

              // object
              alert(div.style); // [object CSSStyleDeclaration]
              alert(div.style.color); // red
            </script>
 
 ## Non-Standard Attributes
 - Sometime non-standard attributes are used to pass custom data from HTML to JavaScript, or to "mark" HTML-elements for JavaScript
 
 
           <div show-info="name"></div>
           <div show-info="age"></div>
           
           <script>
                 let user = {
                     name: "chewzzz",
                     age: 20
                 };
                 
                 // substitue "name" with "chewzzz" and "age" with 20
                 for (let div of document.querySelectorAll("[show-in]")){
                 
                        let field = div.getAttribute("show-info");
                        
                        div.innerHTML = user[field];
                 }
            </script>
  
 ## data-* Attributes
- All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset property.
- For instance, if an elem has an attribute named "data-about", it’s available as elem.dataset.about

            
            <body data-about="Elephants">
               <script>
                 alert(document.body.dataset.about); // Elephants
               </script>
               
        
             <style>
                 .order[data-order-state="new"] {
                   color: green;
                 }

                 .order[data-order-state="pending"] {
                   color: blue;
                 }

                 .order[data-order-state="canceled"] {
                   color: red;
                 }
            </style>

            <div id="order" class="order" data-order-state="new">
              A new order.
            </div>

            <script>
              // read
              alert(order.dataset.orderState); // new

              // modify
              order.dataset.orderState = "pending"; // (*)
            </script>

 
 
