// Desestructuración de arreglos 

const personajes = ['Goku','Vegeta','Trunks'];
const[ , , p3] = personajes;
console.log( pr );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// const arr = retornaArreglo();
// console.log(arr);

//Tarea 
//1. El primer valor del arr se llammará nombre
//2. se llamará setNombre 
const useState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
}

const {nombre, setNombre} = useState('Goku');
console.log(nombre);
setNombre();





