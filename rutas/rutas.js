import { Router } from "express";
import Controlador from "../controlador/controlador.js";

const rutas = Router();
const controlador = new Controlador();

rutas.post("/", controlador.ingresarDatos);
rutas.get("/", controlador.listarDatos);
rutas.get("/:id", controlador.listarDatosPorId)


export default rutas;