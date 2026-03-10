import express from "express"
import expressLayouts from "express-ejs-layouts"
import path from "path"

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(expressLayouts);

app.use((req, res, next) => {
  res.locals.name = "Renish";

  next();
})

app.get('/', (req, res) => {
  res.render("index.ejs", {
    layout: 'base',
    title: 'Home Page'
  })
});

app.get('/task1', (req, res) => {
  res.render("task1/index.ejs", {
    layout: 'base',
    title: 'Task 1 Page'
  })
});
app.get('/task2', (req, res) => {
  res.render("task2/index.ejs", {
    layout: 'base',
    title: 'Task 2 Page'
  })
});
app.get('/task3', (req, res) => {
  res.render("task3/index.ejs", {
    layout: 'base',
    title: 'Task 3 Page'
  })
});
app.get('/task4', (req, res) => {
  res.render("task4/index.ejs", {
    layout: 'base',
    title: 'Task 4 Page'
  })

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});