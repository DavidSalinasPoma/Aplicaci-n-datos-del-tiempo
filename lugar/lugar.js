// Para peticiones http de una api
const axios = require('axios').default;



const getLugarLatLng = async (direccion) => {
    // Aqui obtenemos lo que escribimos en la terminal de comandos
    console.log(direccion);

    const encodeUrl = encodeURI(direccion); // new%york

    // Creando una instacia de peticion de headers
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        // timeout: 1000,
        headers: {
            "x-rapidapi-key": "8c8dfa7123mshb479ffe454f4af2p1c439ajsn479b875a5b4f"
        }
    });

    const respuesta = await instance.get(); // devuelve una respuesta
    console.log(respuesta);
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = respuesta.data.Results[0];
    const adress = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        adress,
        latitud,
        longitud
    };
};

module.exports = {
    getLugarLatLng
};