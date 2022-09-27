const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'http://api.escuelajs.co/api/v1'

//Bueno entonces estamos haciendo una funcion que va a hacer una peticion HTTP
function fetchData(urlApi, callback) {

    // con XMLHttpRequest lo vamos a hacer entonces hacemos una nueva instancia
    let xhttp = new XMLHttpRequest()

    // Como vamos a obtener usamos GET, le pasamos la url de donde vamos a hacer la peticion y el true es para hacer una conexion asincrona
    xhttp.open('GET', urlApi, true)
    
    // luego venimos y aqui no se que se hace
    xhttp.onreadystatechange = function (event) {

        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error', urlApi)
                return callback(error, null)
            }
        } 
    }

    // aca se envia la peticion de alla arriba
    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1)

    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2)
    
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
    
            if (error3)  return console.error(error3)

            console.log(data1[0])
            console.log(`title: ${data2.title}`)
            console.log(`name: ${data3.name}`)

        });
    });
});