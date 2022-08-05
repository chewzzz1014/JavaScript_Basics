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
              
