import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//create todos
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(`INSERT INTO todo(description) VALUES($1)`, [description])

        res.json(newTodo);
    } catch (error) {
        console.log(error);

    }
})

app.get('/todos', async (req, res) =>{
    try {
        const todos = await pool.query(`SELECT *FROM todo`);
        res.json(todos.rows)
    } catch (error) {
        console.log(error);
        
    }
 
})

app.get('/todos/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const todo = await pool.query(`SELECT *FROM todo WHERE todo_id=$1`,[id]);
        
        res.json(todo.rows[0]);
    } catch (error) {
        console.log(error);
        
    }
})

app.put('/todos/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        
        const updateTodo = await pool.query(`UPDATE todo SET description = $1 WHERE todo_id =$2`,[description, id]);
        
        res.json("updated",  updateTodo.rows[0])
    } catch (error) {
        console.log(error);
        
    }
})


app.delete('/todos/:id', async (req, res) =>{
    const {id} = req.params;
    const deletedTodo = await pool.query(`DELETE FROM todo WHERE todo_id = $1`,[id]);
    
    res.json('deleted')
})

app.listen(PORT, () => {
    console.log(`server is on at http://localhost:${PORT}`);
})