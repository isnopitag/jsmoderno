//Funciones en JS

const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola, ${nombre}`;


console.log(saludar('Goku'))


const getUser = () => ({
        uid: 'ABC123',
        username: 'EL_Papi1502'
    })


console.log(getUser())



// function getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo  = ( nombre ) =>({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);