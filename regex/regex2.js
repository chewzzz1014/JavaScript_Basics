function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */


    /*
     * Do not remove the return statement
     */
    let re = new RegExp("^(Mr|Mrs|Ms|Dr|Er)\\.[A-Za-z]*$");
    return re;
}
