export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string, private address: string = "No Address"
        ) {}
}

// export class Hero extends Person{


//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         //super(realName, 'New York');
//     }

// }

export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //super(realName, 'New York');
        this.person = new Person(realName);
    }

}

// COMPOSICIÓN DE CLASES
const person = new Person("Tony Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", person);

console.log(ironman);
