import express from "express";

const app = express()

app.use(express.json())

//routes import
import pecaRouter from "./routes/peca.route"
import clienteRouter from "./routes/cliente.route"


//routes declaration
app.use('/api/v1', pecaRouter)
app.use('/api/v1', clienteRouter)


export default app;