const Contenedor = require('./desafio.js');

const productos = new Contenedor("productos.txt");

const test = async () => {
    let save = await productos.save({
        nombre: "Tom",
        precio: 100,
        enlace: "4545",
        id: 4 
    });
    let getAll = await productos.getAll();
    let getById = await productos.getById(5);
    let deleteById = await productos.deleteById(2);
    let deleteAll = await productos.deleteAll();

    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);
};

test();