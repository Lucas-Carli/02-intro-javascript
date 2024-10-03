//Desestructuración 
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// const retornaPersona = (usuario) => {

//     const { nombre, edad, clave } = usuario;

//     console.log(edad, clave, nombre)

// }

// Directamente desestructuro las propiedades como argumento
const useContext = ({clave, nombre, edad, rango }) => {
    // console.log(edad, clave)

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

// const avenger = useContext( persona );
// latlng:{} -> Esto busca las propiedades del objeto
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);