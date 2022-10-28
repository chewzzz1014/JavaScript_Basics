const express = require("express");
const router = express.Router();

// middleware that only applies to all admin routes
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("Sorry, not an admin.")
})

router.get("/topsecret", (req, res) => {
    res.send("Top Secret")
})

router.get("/deleteEverything", (req, res) => {
    res.send("Deleting Everything")
})

module.exports = router;