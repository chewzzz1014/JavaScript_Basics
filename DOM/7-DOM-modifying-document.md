## Modifying Document

## Creating an Element (DOM Node)
- `document.createElement(tag)` : Creates a new element node with the given tag.
            
              let div = document.createElement("div");
              
- `document.createTextNode(text)` : Creates a new text node with the given text

              let textNode = document.createTextNode("Here I am");
              
## Creating the Message

            <!-- What we get in the end -->
            <div class='alert'> 
                <strong>Hi there!</strong> You've read an important message.
            </div>
            
            
            let div = document.createElement("div");
            div.className = "alert";
            div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
            
            
            
## Insertion Method (node/string)

            // append the the end of document.body
            document.body.append(div);
            
            // append somethin to div
            div.append(anotherElement);
  
- `Insert as text, not as HTML`
- `node.append(...nodes or strings)`: Append nodes or string at the end of node
- `node.prepend(..nodes or strings)`: Insert nodes or strings at the beginning of node
- `node.before(..nodes or strings)`: Insert nodes or strings before node
- `node.after(...nodes or strings)`: Inset nodes or strings after node
- `node.replaceWith(...nodes or strings)`: Replaces node with the given nodes or strings.


            <ol id="ol">
              <li>0</li>
              <li>1</li>
              <li>2</li>
            </ol>

            <script>
              ol.before('<p>before</p>'); // insert string "before" before <ol>
              ol.after('<p>after</p>'); // insert string "after" after <ol>

              let liFirst = document.createElement('li');
              liFirst.innerHTML = 'prepend';
              ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

              let liLast = document.createElement('li');
              liLast.innerHTML = 'append';
              ol.append(liLast); // insert liLast at the end of <ol>
            </script>

            
            &lt;p&gt;before&lt;/p&gt
            
              1. prepend
              2. 0
              3. 1
              4. 2
              5. append
              
           &lt;p&gt;after&lt;/p&gt
      
## insertAdjacentHTML/Text/Element
- Insert HTML instead of text
- `elem.insertAdjacentText(where, text)` : Insert text
- `elem.insertAdjacentElement(where, text)` : Insert element
- `elem.insertAdjacentHTML(where, html)` : Insert HTML
- `where` can be:
   - `beforebegin`: Insert html immediately before elem
   - `afterbegin`: Insert html into elem at the beginning
   - `beforeend`: Insert html into elem at the end
   - `afterend`: Insert html immediately after elem
   
 
          <div id='div'></div>
          <script>
              div.insertAdjacentHTML("beforebegin", "<p>Hello</p>");
              div.insertAdjacentHTML("afterend", "<p>Bye</p>");
          </script>
          
          // result
          <p>Hello</p>
          <div id="div></div>
          <p>Bye</p>
          
     
 ## Node Removal
 -`node.remove()`: Remove a node
 - All insertion methods automatically remove the node from the old place. 
 
 
            <div id="first">First</div>
            <div id="second">Second</div>
            <script>
              // no need to call remove
              second.after(first); // take #second and after it insert #first
            </script>
 
            // result
            Second
            First
        
## Cloning nodes: cloneNode
- `elem.cloneNode(true)` :  creates a “deep” clone of the element – with all attributes and subelements
- `elem.cloneNode(false)`: clone is made without child elements.


            <div class="alert" id="div">
              <strong>Hi there!</strong> You've read an important message.
            </div>

            <script>
              let div2 = div.cloneNode(true); // clone the message
              div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone

              div.after(div2); // show the clone after the existing div
            </script>
  
            // result
            Hi there! You've read an important message.
            Bye there! You've read an important message.

## DocumentFragment
- DocumentFragment is a special DOM node that serves as a wrapper to pass around lists of nodes.
- We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.



                <ul id="ul"></ul>

                <script>
                function getListContent() {
                  let fragment = new DocumentFragment();

                  for(let i=1; i<=3; i++) {
                    let li = document.createElement('li');
                    li.append(i);
                    fragment.append(li);
                  }

                  return fragment;
                }

                ul.append(getListContent()); // (*)
                </script>

                //result
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
