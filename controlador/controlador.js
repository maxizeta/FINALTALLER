import Servicio from "../servicios/servicio.js"


class controlador {
    Servicio = new Servicio

    ingresarDatos = async (req, res) => {
        try {
            const { id, temperatura } = req.body
            const time = new Date()
            const data = await this.Servicio.ingresarDatosServicio(id, temperatura, time)
            res.status(200).send({ data })
        } catch (error) {
            res.status(422).send({ errorMsg: "datos no validos" })
        }
    }

    listarDatos = async (req, res) => {
        try {
            const data = await this.Servicio.listarDatosServicio()
            res.status(200).send({ data })
        } catch (error) {
            res.status(422).send({ errorMsg: "no valida" })
        }
    }
    listarDatosPorId = async (req, res) => {
        try {
            const { id } = req.params
            const data = await this.Servicio.listarDatosPorIdServicio(id)
            res.status(200).send({ data })
        } catch (error) {
            res.status(422).send({ errorMsg: "numero de sonda incorrecto" })
        }
    }
}
export default controlador