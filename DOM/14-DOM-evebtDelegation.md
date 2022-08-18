## Event Delegation
- If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
- Examples, a table:

```
<table>
  <tr>
    <th colspan="3">This is the title</th>
  </tr>
  <tr>
    <td class="nw">row 1 col 1</td>
    <td class="n">row 1 col 2</td>
    <td class="ne">row 1 col 3</td>
  </tr>
     <td class="nw">row 2 col 1</td>
    <td class="n">row 2 col 2</td>
    <td class="ne">row 2 col 3</td>
  <tr>
    <td class="nw">row 3 col 1</td>
    <td class="n">row 3 col 2</td>
    <td class="ne">row 3 col 3</td>
  </tr>
</table>
```
- Setup "catch-all" handler on `<table>` element

```
let selectedTd;
table.onclick = function(event) {
  
  // returns the nearest ancestor that matches the selector. 
  let td = event.target.closest('td'); 
  
  // If event.target is not inside any <td>, then the call returns immediately, as there’s nothing to do.
  if (!td) return; 

  // In case of nested tables, event.target may be a <td>, but lying outside of the current table. So we check if that’s actually our table’s <td>.
  if (!table.contains(td)) return; 

  // highlight it
  highlight(td); 
};
function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}

```
