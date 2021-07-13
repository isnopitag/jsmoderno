import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject ) => {

//     setTimeout( () => {
//         // resolve();
//         const heroe = getHeroeById(2)
//         resolve(heroe)
//         // reject('No se pudo encontrar el heroe')
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log( 'Heroe', heroe);
// })
// .catch( err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const heroe = getHeroeById(id);
        if(heroe !== undefined){
            resolve(heroe);
        }else{
            reject('No se pudo encontrar el heroe')
        }
      }, 2000);
    });
    
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch( console.warn)