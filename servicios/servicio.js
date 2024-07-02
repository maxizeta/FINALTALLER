import sonda from "../modelos/sonda.js"

class Servicio {
    sondaModel = new sonda()

    ingresarDatosServicio = async (id, temperatura, time) => {
        try {
            if (temperatura < -20 || temperatura > 100 || id < 1 || id > 5) throw error
            const data = await this.sondaModel.create(id, temperatura, time)
            return data
        } catch (error) {
            throw error
        }
    }
    listarDatosServicio = async () => {
        try {
            const data = await this.sondaModel.getAll()
            return data
        } catch (error) {
            throw error
        }
    }
    listarDatosPorIdServicio = async (id) => {
        try {
            if (id < 1 || id > 5) throw new Error('Número de sonda incorrecto')
            const data = await this.sondaModel.getById(id)
            return data
        } catch (error) {
            throw error
        }
    }
    
    
}

export default Servicio