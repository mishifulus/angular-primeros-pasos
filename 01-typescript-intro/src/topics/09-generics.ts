// EVITA UTILIZAR EL TIPO "ANY" PORQUE PERMITE CUAQUIER COMPORTAMIENTO, PROPIEDAD O FUNCIÓN AUNQUE NO EXISTA
// export function whatsMyType( argument: any ): any {

//     return argument;

// }

// GENERICOS
export function whatsMyType<T>( argument: T): T {

    return argument;

}

//CON ANY SE PIERDEN LAS FUNCIONALIDADES DEL INTELLISENSE
let amIString = whatsMyType<string>('Hola Mundo'); 
let amINumber = whatsMyType<number>(100);
// let amIString = whatsMyType<string>('Hola Mundo'); 
// let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
