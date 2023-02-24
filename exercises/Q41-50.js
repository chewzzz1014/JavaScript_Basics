// Q41 & Q42: Comparison of cookie, local storage and session storage
/**
 * 1. Cookie: For server side and client side. Can set expiry data. SLL supproted. Max data size is 4KB
 * 
 * 2. Local storage: For client side only. Valid till its been deleted. Does not support SSL. Max data size is 5MB.
 * 
 * 3. Session storage: For client side only. Valid till tab is closed. Does not support SSL. Max size is 5MB. 
 */


// Q43: How to access web storage
// Window object implements WindowLocalStorage and WindowSessionStorage objects which has localStorage (window.localStorage) and sessionStorage (window.sessionStorage)

// set local storage
localStorage.setItem('logo', document.getElementById('logo').value)
// get local storage
localStorage.getItem('logo')


// Q44: Methods of session storage

// save data
sessionStorage.setItem('key', 'value')
// get data
let data = sessionStorage.getItem('key')
// remove data
sessionStorage.removeItem('key')
// remove all data
sessionStorage.clear()
