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

    let page = parseInt(req.query.page);

    try {
        const [results, fields] = await connection.query(
            'SELECT COUNT(id) as count FROM student'
        );

        let recode = results[0].count; 
    } catch (err) {
        console.log(err);
    }

    let onetime = 100

    let limit = (page - 1) * onetime 
    let offset = limit + 100

    try {
        const [results, fields] = await connection.query(
            'SELECT id,name,email,phone,address,city,dob,gender FROM student'
        );
        
        let {id,name,email,phone,address,city,dob,gender} = results[0]; 
        console.log(name,{"data":results});
        
    } catch (err) {
        console.log(err);
    }

    console.log({"limit":limit,"offset":offset});
    


    res.render("index.ejs")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))