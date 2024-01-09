// function classDecorator(
//     constructor: any
// ) {
//     return class extends constructor {
//         newProperty = "New Property";
//         hello = 'Override';
//     }
// }

function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New Property";
        hello = 'Override';
    }
}

@classDecorator
class SuperClass {
    public myProperty: string = "Abc123";

    print() {
        console.log("Hola mundo");
    }
}

console.log( SuperClass ); //IMPRIME LA DEFINICIÓN DE LA CLASE

const myClass = new SuperClass();
console.log( myClass );