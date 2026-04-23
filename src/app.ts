import express from "express";

const app = express()

app.use(express.json())

//routes import
import pecaRouter from "./routes/peca.route"


//routes declaration
app.use('/api/v1', pecaRouter)

export default app;