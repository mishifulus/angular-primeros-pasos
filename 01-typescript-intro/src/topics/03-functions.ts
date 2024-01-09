function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${a + b}`; //FIRMA DE LA FUNCION (LO QUE RETORNA) CON USO DE BADTIPS
}

// PARAMS: OBLIGATORIO - OPCIONAL - OPCIONAL CON UN VALOR POR DEFECTO
function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result: string = addNumbers(1,2).toString();
const result2: string = addNumbersArrow(2,5);
const multiplyResult: number = multiply(5);

console.log({result, result2, multiplyResult}); // IMPRIMIR COMO OBJETO

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida: ${ this.hp }`)
    }
}

healCharacter (strider, 30);
strider.showHp();


export {}