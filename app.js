// Importamos yargs
const argv = require('yargs').option({ // creando comandos en ka raiz del proyecto
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// Una funcion asing a fuerza regresa una promesa
lugar.getLugarLatLng(argv.direccion).then(
    response => {
        console.log(response);

    }
).catch(
    error => {
        console.log(error);

    }
);

// Obteniendo el clima
// clima.getClima().then(
//     response => {
//         console.log(response);
//     }
// ).catch(
//     error => {
//         console.log(error);
//     }
// );

// const getInfo = async (direccion) => {

//     try {
//         // Obtener las cordenadas
//         const cordenadas = await lugar.getLugarLatLng(direccion);
//         const temperatura = await clima.getClima(cordenadas.latitud, cordenadas.longitud);
//         return `El clima de: ${direccion} es de: ${temperatura}`;
//     } catch (e) {
//         return `No se pudo determinar el clima de ${direccion}`;
//     }

// };

// getInfo(argv.direccion)
//     .then(
//         response => {
//             console.log(response);

//         }
//     )
//     .catch(
//         error => {
//             console.log(error);

//         }
//     );