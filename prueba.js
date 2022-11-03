const Contenedor = require('./clase');

const productos = new Contenedor("productos.txt");

const prueba = async () => {
    let save = await productos.save({
        nombre: "Tom",
        precio: 100,
        enlace: "4545" 
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

prueba();