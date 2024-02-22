import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB, db } from "./dbConnection.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
    res.send("Backend is working!!!");
})

app.post('/add', async (req, res) => {
    try {
        const {
            name,
            id,
            dept,
            doj,
            gender,
            designation,
            salary
        } = req.body;
        const addQuery = `INSERT INTO employee (id,name,department,doj,gender,designation,salary) VALUES(${id},'${name}','${dept}','${doj}','${gender}','${designation}',${salary})`;
        // console.log(addQuery);
        const result = await db.query(addQuery);
        return res.status(200).json({ message: "Inserted Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed in adding - Api" });
    }
})

app.post('/personal', async (req, res) => {
    try {
        const {
            id,
            email,
            college,
            gradYear,
            phno,
            dob,
            address
        } = req.body;
        const addPerQuery = `UPDATE employee SET email = '${email}', college = '${college}', grad_Year = '${gradYear}', phone_No = '${phno}', address = '${address}', dob = '${dob}' WHERE id = ${id}`;
        const result = await db.query(addPerQuery);
        return res.status(200).json({ message: "Added Personal Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error in Adding Personal - Api" });
    }
})

app.get('/fetch', async (req, res) => {
    try {
        const fetchQuery = 'SELECT * FROM employee';
        const results = await db.query(fetchQuery)
        return res.status(200).json(results.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed in fetching - Api" });
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})