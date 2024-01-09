const skills: string[] = ['Bash', 'Counter', 'Healing'];

//OBJETO
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

//INTERFACE
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //OPTIONAL => STRING OR UNDEFINED
}

strider.hometown = 'Riverdale';
console.table(skills);
console.table(strider);

export {}