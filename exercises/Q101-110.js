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