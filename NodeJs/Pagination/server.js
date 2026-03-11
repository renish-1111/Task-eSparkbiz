import express from 'express'
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_student',
});

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', async (req, res) => {

    let page = parseInt(req.query.page) || 1;
    let offset = parseInt(req.query.offset) || 100;
    let sorting = req.query.sorting || "id,asc";
    let search = req.query.search || "";


    let limit = (page - 1) * offset

    try {
        var [results, fields] = await connection.query(
            'SELECT COUNT(id) as count FROM student'
        );
        let recode = results[0].count;
        let searchQuary = ""
        if (search || sorting) {
            let sortparameter = sorting.split(",")
            searchQuary = `WHERE name LIKE '%${search}%' OR phone LIKE '%${search}%' OR dob LIKE '%${search}%' ORDER BY ${sortparameter[0]} ${sortparameter[1]}`
        }


        var [results, fields] = await connection.query(
            `SELECT id,name,email,phone,address,city,dob,gender FROM student ${searchQuary} LIMIT ?, ?`, [limit, offset]
        );

        res.render("index.ejs", { "data": results, "page": page, "total": Math.ceil(recode / offset) });

    } catch (err) {
        console.log(err);
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))