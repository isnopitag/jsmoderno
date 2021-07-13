// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
import heroes  from '../data/heroes'
// import heroes, {owners}  from '../data/heroes'

// console.log(owners)

export const getHeroeById = (id) =>  heroes.find(h => h.id === id);

// console.log(getHeroeById(2));

export const getHeroesByOwner = ( owner ) => heroes.filter(h => h.owner === owner);

// console.log(getHeroesByOwner('DC'))