const argv = require('yargs')
    .command('crear', 'este comando crea una tarde', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza el estado completo de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },

        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea del arreglo', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}