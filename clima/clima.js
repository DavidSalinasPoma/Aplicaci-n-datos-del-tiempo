// Hacer peticion al servicio rest
const axios = require('axios');

// Funcion que retorna el clima
const getClima = async (lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=513731d47dd3cf66f7f19c724d8a08c1&units=metric`);

    return respuesta.data.main.temp;
};



module.exports = {
    getClima
};