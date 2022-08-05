## Selecting Methods

1. document.getElementById(id)
   - Return the element based on the id given

2. elem.querySelectorAll(css)
   - Return all elements inside elem that matches the given CSS selector.

3. elem.querySelector(css)
   - Return the first element inside elem that matches the given CSS selector.

4. elem.matches(css)
   - Return all the elements inside elem that matches the given CSS-selector
   - Eg, `elem.matches('a[href$="zip"]')` to find link with 'zip' in the href of a

5. elem.closest(css)
   - Return the nearest ancestor that matches the CSS-selector
   - elem itself is included in the search
