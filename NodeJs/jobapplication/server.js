const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser");
const formRouter = require("./routes/form.router")

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const currentTime = new Date()

    console.log(`\nLog : ${method} ${url} - ${currentTime}`);

    next()
})

// app.get("/", (req, res) => {
//     res.render("index", {
//         layout: 'base',
//         title: 'Home Page'
//     });
// })

app.use("/",formRouter)



app.listen(3000, () => {
    console.log("Server running on port 3000");
});