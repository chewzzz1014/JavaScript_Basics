## Selecting Methods

1. document.getElementById(id)
   - Return the element based on the id given

2. elem.querySelectorAll(css)
   - Return all elements inside elem that matches the given CSS selector.

3. elem.querySelector(css)
   - Return the first element inside elem that matches the given CSS selector.

4. elem.matches(css)
   - Return all elements inside elem that matches the given CSS-selector
   - Eg, `elem.matches('a[href$="zip"]')` to find link with 'zip' in the href of a

5. elem.closest(css)
   - Return the nearest ancestor that matches the CSS-selector
   - elem itself is included in the search
   
6. elem.getElementsByTagName(tag)
   - Return all elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
   - Examples of tag: `<div>`, `<ul>` ...
   
7. elem.getElementsByClassName(className)
   - Return all elements that have the given class name.
   - Eg: 
   
            `<div class = "contents">`
            .....
            `let  articles = document.getElementsByClassName("contents");`
   
8. document.getElementsByName(name)
   - Return all elements with the given name attribute, document-wide.
   - Eg: 
   
            `<form name = "my-form">`
            .....    
            `let form = document.getElementsByName("my-form");`

9. elemA.contains(elemB)
   - Return true if `elemB` is inside `elemA` (elemB is descendant of elemA)
   - elem itself is also checked 
   
## Live Collections
- All methods `getElementsBy` return a live collection.
- 'Live' means that it reflects the current state of the document and auto-update when it changes
- However, `querySelectorAll` return a static collection.


## Example of CSS Selector for Searching Methods
- `ul > li:last-child` : The last `<li>` nested inside `<ul>`
- `a[href$="zip"]` : `a`'s `href` that contains the word 'zip'
- `form[name="search"]` : `form`'s name that equal to the word 'search'
- `.chapter` : Class name
- `div` : Tag name
- `input` : Name. Eg. `<form name = "my-form">`
- `#age-table label` : label tag nested inside id age-table
