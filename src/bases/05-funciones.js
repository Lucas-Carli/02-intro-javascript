// Funciones en JS 

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => 'Hola mundo';

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


// Tarea
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
const getUsuarioActivo = ( nombre ) => (  {
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );