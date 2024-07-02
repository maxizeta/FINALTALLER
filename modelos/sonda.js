class Sonda {
    constructor() {
        this.sondas = [];
    }


    Dato = class {
        constructor(id, temperatura, time) {
            this.id = id;
            this.temperatura = temperatura;
            this.time = time
        }
    }

    create = async (id, temperatura, time) => {
        const dato = new this.Dato(id, temperatura, time);
        this.sondas.push(dato);
        return dato;
    }

    getAll = async () => {
        return this.sondas;
    }

    getById = async (iden) => {
        const mismoId = [];
        for (let i = 0; i < this.sondas.length; i++) {
            const { id } = this.sondas[i];
            if (id == iden) {
                mismoId.push(this.sondas[i]);
            }
        }
        return mismoId;
    }
    
}

export default Sonda;