import express from "express"
import rutas from "./rutas/rutas.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(rutas)

app.listen(8080, ()=>{
    console.log(app.listen, 8080);
})