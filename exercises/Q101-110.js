// Q101: Creator of JS
// Brendan Eich in 1995


// Q102: usage of preventDefault()
// cancel the default action that belongs to the action
// example: prevent form submission when click on submit button, prevent opening URL when click on hyperlink
document.getAnimations('link').addEventListener('click', (e) => {
    e.preventDefault()
})

