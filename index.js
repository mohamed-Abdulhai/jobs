import express from 'express'
import dotenv from 'dotenv'
import { dataBaseConnect } from './src/DB/dbConfig.js'
import bootstrap from './src/bootstrap.js'
dotenv.config()
const app = express()

const port = process.env.PORT

dataBaseConnect()
bootstrap(app)

app.listen(port, () => console.log(`Server is runing on ${process.env.BASE_URL}${port}`))