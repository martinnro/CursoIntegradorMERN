import 'dotenv/config'
import express from 'express'
import placesData from './data/places.json'
import {router as placesRouter} from './routes/places.router'
import { connect } from './db/mongo'

const app = express() //Instancia de express
const PORT = 4000

connect()

app.use(express.json()) //Habilita middleware de analisis de JSON. Sirve para leer los datos JSON en el body de las REQUEST. Mantiene los tipos de datos

app.use('/places', placesRouter) //El basepath places se va a encargar el router placesRouter

app.listen(PORT, () => {
    console.log('Servidor express iniciado en', PORT)
})