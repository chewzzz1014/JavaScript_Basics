const express = require("express");
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin")
const app = express();

// use express router to group routes
// put all routes in 'routes' filder
// use the imported routes and prefix all the routes with /shelters or dogs
app.use("/shelters", shelterRoutes)
app.use("/dogs", dogRoutes)
app.use("/admin", adminRoutes)

app.listen(3000, () => {
    console.log("Listening at Port 3000.")
})