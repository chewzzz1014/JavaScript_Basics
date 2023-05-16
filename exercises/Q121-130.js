// Q121: validate email
function validateEmail(email) {
    var re = var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}/
    return re.test(String(email).toLowerCase());
}
