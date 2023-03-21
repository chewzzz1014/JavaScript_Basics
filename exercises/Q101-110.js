// Q101: Creator of JS
// Brendan Eich in 1995


// Q102: usage of preventDefault()
// cancel the default action that belongs to the action
// example: prevent form submission when click on submit button, prevent opening URL when click on hyperlink
document.getAnimations('link').addEventListener('click', (e) => {
    e.preventDefault()
})


    // Q103: usage of stopPropagation()
    // stop event from bubbling up the event chain
    `
<div onClick='secondFunc()'>DIV2
    <div onClick='firstFunc(event)'>DIV 1</div>
</div>
`

function firstFunc(e) {
    alert('DIV 1')
    e.stopPropagation()
}

function secondFunc() {
    // will not be executed. Event bubbling is prevented
    alert('DIV 2')
}


// Q104: Steps in returning false usage
/**
 * 1. stop browser's default action
 * 2. prevents action from propagating DOM
 * 3. stops callback execution
 */


// Q105: BOM (Browser Object Model)
// allows communication between JS and browser
// consists of objec navigator, history, screen, location and document (which are children of window)
// BOM is standardized and can be changed based on diff browsers


// Q106: setTimeout
// call function after specified number of ms
setTimeout(() => console.log('Hello World'), 2000)


// Q107: setInterval
// call function at specify interval in ms
setInterval(function () { console.log('Hello World') })


// Q108: JS is a single threaded language


// Q109: Event delegation
// listen to events by delegate parent element as listener for all events happen inside it

// to detect all changes inside the form
let form = document.querySelector('#registration-form')
form.addEventListener('input', function (e) {
    console.log(e.target)
})


// Q110: ECMAScript
// scripting language that forms the basis of JS