module.exports = func => {
    // return a function that return err catched (after executed the function)
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}