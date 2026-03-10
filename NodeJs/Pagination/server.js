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

app.get('/',async (req, res) => {

    let page = parseInt(req.query.page) || 1;

   

    let onetime = 100

    let limit = (page - 1) * onetime 
    let offset = limit + onetime
    console.log({"limit":limit,"offset":offset});

    try {
        var [results, fields] = await connection.query(
            'SELECT COUNT(id) as count FROM student'
        );

        let recode = results[0].count; 

        var [results, fields] = await connection.query(
            `SELECT id,name,email,phone,address,city,dob,gender FROM student LIMIT ${limit}, ${onetime}`
        );
        
        res.render("index.ejs",{"data":results,"page":page,"total":Math.ceil(recode/onetime)});
        
    } catch (err) {
        console.log(err);
    }

    


})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))