// Promesas
import { getHeroeById } from './bases/08-imp-exp'


// primero se ejecuta todo lo síncrono(secuencial)
// luego van las promesas que son asíncronas
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         console.log(heroe)
//         // reject( 'No se puede encontrar el error' );
//         resolve( p1 );
//     }, 2000)
// });

// promesa.then(() => {
//     console.log('Then de la promesa')
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject( 'No se puede encontrar el error' );
            }
        }, 2000)
    });
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);