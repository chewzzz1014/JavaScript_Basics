## Dom Tree
- Every HTML tag is an object. Nested tag are children of enclosing one.

      document.body: document
      innerHTML: HTML contents of node
      offsetWidth: the node width (px)
      
- Tags are element nodes and form the tree structure. <html> is at root, <head> and <body> are its children.
- Spaces and newlines are totally valid characters, like letters and digits. They form text nodes and become a part of the DOM
- `Text inside elements` forms text nodes, labelled as `#text`.
- There are only two top-level exclusions:
   1. Spaces and newlines before <head> are ignored for historical reasons.
   2. If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.
 
- If the browser encounters malformed HTML, it automatically corrects it when making the DOM.
- For instance, the top tag is always <html>. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it. The same goes for <body>.
- Everything in HTML, even comments, becomes a part of the DOM.
- Node types (usually use 4 out of 12):
   - document:the “entry point” into DOM.
   - element nodes: HTML-tags, the tree building blocks.
   - text node: contain text.
   - comment node: sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.
  
  
