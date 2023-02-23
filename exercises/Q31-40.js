// Q31: Service Worker
// a script that runs in bg, seperate from web page and provides features that dont need web page/ui

// Q32: How service worker manipulate DOM?
// they cant access directly, but they communicate w/ pages they control by responding to msg sent via postMessageinterface

// Q33: How to reuse information across service worker restarts
// The problem with service worker is that it gets terminated when not in use, and restarted when
// it's next needed, so you cannot rely on global state within a service worker's onfetch and
// onmessage handlers.In this case, service workers will have access to IndexedDB API in order to
// persist and reuse across restarts