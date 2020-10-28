const fs = require('fs');

let arrPhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(arrPhacer);

    fs.writeFile('db/data.json', data, (e) => {
        if (e) throw new Error('No se pudo grabar', e);

    });

}

const cargarDB = () => {
        try {
            arrPhacer = require('../db/data.json');
        } catch (e) {
            arrPhacer = [];
        }

        // console.log(arrPhacer);
    }
    // funcion para obtener el listado
const getListado = () => {
    cargarDB();
    return arrPhacer;
}

let crear = (descripcion) => {
    cargarDB();

    let objtarea = {
        descripcion: descripcion,
        completado: false
    }

    arrPhacer.push(objtarea);
    guardarDB();

    return objtarea;
}

let borrar = (descripcion) => {
    cargarDB();
    let index = arrPhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    console.log(index);
    if (index >= 0) {
        let eliminado = arrPhacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

let actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = arrPhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        arrPhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}