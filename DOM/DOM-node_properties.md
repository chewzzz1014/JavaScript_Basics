## DOM Node Classes
Hierarchy of DOM nodes:
![image](https://user-images.githubusercontent.com/92832451/183029688-21e6626d-acab-4d1b-9225-1f6126402861.png)

:copyright: javascript.info, [Source](https://javascript.info/basic-dom-node-properties)


1. EventTarget
   - Root 'abstract' class for everythin.
   - Never create obj of this class

2. Node
   - Abstract class that serves as a base for DOM nodes
   - Provides the core tree functionality: parentNode, nextSibling, childNodes
   - Never create object of this class 
   
3. Document
   - Document as a whole
   - `document` global object belongs to this class and serves as entry point to DOM
   
4. CharacterData (Abstract Class)
   - Text: Class correspond to text inside element
   - Comment: Class for comments
   
   
5. Element
   - Vase class for DOM elements
   - Provides element-level naviation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector
   - Supports HTML, XML and SVG
   
   
6. HTMLElement
   - Basic class for all HTML elements


              document.body.constructor.name    // HTMLBodyElement
              document.body   // [object HTMLBodyElement]
              document.body instanceof HTMLBodyElement  // true
              document.body instanceof HTMLElement  // true
              document.body instanceof Element  // true
              document.body instanceof Node ) // true
              document.body instanceof EventTarget ) // true            
              

## console.log(elem) vs console.dir(elem)
   
             let elem = document.body;
             
             // console.log display the DOM tree (or the HTML document)
             console.log(elem);
             
             
             // console.dir display the element as the DOM object
             console.dir(elem);
             /* Output
               aLink: ""
               accessKey: ""
               ariaAtomic: null
               ariaAutoComplete: null
               ariaBusy: null
               ariaChecked: null
               ariaColCount: null
               ariaColIndex: null
               ariaColSpan: null
               ariaCurrent: null
               ariaDescription: null
               ariaDisabled: null
               ariaExpanded: null
               ...
              */
              
  ## Node Type Property
  - Old-fashioned way to get the type of a DOM node.
  1. `elem.nodeType == 1` for element nodes
  2. `elem.nodeType == 3` for text nodes,
  3. `elem.nodeType == 9` for the document object,
  
  ## Identifying nodeNAME and tagName of DOM node
  - tagName: Exists only for `Element` nodes
  - nodeName: Defined for only Node. For `Element`, it's same as tagName. For other node types (text, command etc), has a string with the node type.
  
  
               document.body.nodeName     // BODY
               document.body.tagName      // BODY  
               
## innerHTML
- Return the HTML inside the element as a string
- However, `innerHTML += ...` will overwrite the existing contents and write the new contents.


                 <body>
                     <p>A paragraph</p>
                     <div>A div</div>

                 <script>
                     alert( document.body.innerHTML ); // read the current contents
                     document.body.innerHTML = 'The new BODY!'; // replace it
                 </script>

## outerHTML
- Contains the full HTML of the element
- Writing to outerHTML replaces the element in the DOM
                  
 
## nodeValue/data
- innerHTML is only valid for element nodes

                  <body>
                     Hello
                     <!-- Comment -->
                    <script>
                         let text = document.body.firstChild;
                        alert(text.data); // Hello

                        let comment = text.nextSibling;
                        alert(comment.data); // Comment
                    </script>
                  </body>
      
## textContent
- Provide access to the text inside the element (only text, exclude tag like <div>)
- Regards the input as text, instead of innerHTML that treats the input as HTML
      
      
               <div id="news">
                  <h1>Headline!</h1>
                  <p>Martians attack people!</p>
               </div>

               <script>
                 // Headline! Martians attack people!
                 alert(news.textContent);
               </script>
               
               
              
