const express = require("express")
const mysql = require("mysql2/promise")
const studentRoute = require("./routes/student.route")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/",studentRoute);
app.get('/404', (req, res) => {
    res.render("404.ejs")
})
   
app.listen(port, () => console.log(`Example app listening on port ${port}!`))