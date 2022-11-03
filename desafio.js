const fs = require ('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
            )
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    getAll = async() => {
        try{
            const productos = await fs.promises.readFile(this.file, 'utf-8');
            return JSON.parse(productos);
        } catch(err) {
            if(err.message.includes("No such file or directory")) return [];
            console.log(`error: ${err}`);
        }
    }

    save = async obj => {
        let productos = this.getAll();
        try{
            let nuevoId;
            productos.length === 0 ? nuevoId = 1 : nuevoId = productos [productos.length-1].id + 1;
            let nuevoObj = {...obj, id: nuevoId};
            productos.push(nuevoObj);
            await this.writeFile(productos);
            return nuevoObj.id;
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    getById = async id => {
        let productos = await this.getAll();
        try {
            const obj = productos.find(id => productos.id === id);
            return obj ? obj : null;
        } catch(err) {
                console.log(`error: ${err}`);
        }
    }

    deleteById = async id => {
        let productos = await this.getAll();
        try {
            productos = productos.filter(producto => producto.id != id);
            await this.writeFile(productos);
        } catch(err) {
            console.log(`error: ${err}`);
        }
    }

    deleteAll = async() => {
        this.writeFile([]);
    }
}

module.exports = Contenedor;