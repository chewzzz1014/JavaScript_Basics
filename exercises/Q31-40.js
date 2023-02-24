// Q31: Service Worker
// a script that runs in bg, seperate from web page and provides features that dont need web page/ui

// Q32: How service worker manipulate DOM?
// they cant access directly, but they communicate w/ pages they control by responding to msg sent via postMessageinterface

// Q33: How to reuse information across service worker restarts
/*
The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's onfetch and onmessage handlers.
In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts
*/


// Q34: IndexedDB
// low-level API for client-side storage of larger amounts of structured data
// API use indexes to enable high-performance searches of data


// Q35: Web Storage
// API that enables browser to store key value pairs locally within browser (more intuitive than using cookies)
// 2 mechanisms:
/**
 * 1. Local storage: stores data for current origin with no expiration date
 * 2. Session storage: store data for one session. Data is lost when tab is closes
 */


// Q36: Port message
// method to enable cross-origin communication between Windows objects (i.e, between a page and a pop-up that it spawned)
// they are allowed to access each other iff pages follow same-origin policy


// Q37&Q38: Cookies
// Piece of data accessed by browser
// saved as kv pairs. Used to remember info about user profile


// Q39: Options in cookie
// 1. Set expiry data of cookie (default: cookie is deleted when browser is close)
// 2. Set path of cookie belongs to (default: cookie belongs to current page)


// Q40: Delete cookie
// set expiry date