//Desestructuracion de Objetos.
//Asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
}

// const { nombre,edad,clave } = persona;

// console.log(nombre);
// console.log(edad)
// console.log(clave)

const huseContext = ({nombre, edad, rango = 'Capitan', clave}) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.15,
            lng: 12.23
        }

    }
}

const {nombreClave, anios, latlng:{lat, lng}} = huseContext(persona);

console.log(nombreClave, anios)
console.log(lat,lng)

