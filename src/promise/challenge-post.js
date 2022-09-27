import fetch from "node-fetch";


const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credencials : 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }) 
    return response;
}

const data = {
    "title": "Aaaaah perrroooo te cambie el resultado JADJAJFAJFJAFJ",
    "price": 999999999999999,
    "description": "Este man GNDX ha mejorado para explicar",
    "images": ["https://placeimg.com/640/480/any", "Uyyyy esta no es una imagen JAJSJDAJDJAJSD", "POR FIN ENTIENDO CALL BACKS, PROMESAS Y EL FREAKING FETCHHHHH!!!!!!!!!!!!"],
}

postData(`${API}/products/212`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))