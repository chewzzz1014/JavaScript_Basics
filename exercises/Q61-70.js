// Q61: Main rules of promise
// 1. Promise is an object that supplies standard-compliant .then() method
// 2. Pending promise may transition into fulfilled or rejected state (pending => fulfilled/rejected)
// 3. Fulfilled and rejected promise is settled. Must not transition into any other state
// 4. Once promise is settled, value must not be change


// Q62: Callback in callback
// nest one callback in another callback to execute the actions sequentially one by one
loadScript('./script1.js', function (script) {
    console.log('first script loaded')
    loadScript('./script2.js', function (script) {
        console.log('second script loaded')
        loadScript('./script3.js', function (script) {
            console.log('third script loaded')
        })
    })
})


// Q63: Promise chaining
