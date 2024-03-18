import express from 'express'
import {PORT, mongodbURL} from './config.js'
import mongoose from 'mongoose'
import routers from './routers/bookRouter.js'
import bookModels from './Models/bookModel.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.use('/', routers)

mongoose.connect(mongodbURL)
        .then(() => {
            console.log("Connected to Database")
            app.listen(PORT, () => {
                console.log("Server running on port", PORT)
            })
        })
        .catch((err) => {
            console.log(err)
        })