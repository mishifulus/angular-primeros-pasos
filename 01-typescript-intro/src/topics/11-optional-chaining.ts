export interface Passanger {
    name: string;
    children?: string[];
}

const passanger1: Passanger = {
    name: 'Citlalli'
}

const passanger2: Passanger = {
    name: 'Fernando',
    children: ['Natalia', 'Eliza']
}

const printChildren = ( passanger: Passanger): number => {

    if ( !passanger.children ) return 0;
    
    //const howManyChildren = passanger.children?.length || 0;
    const howManyChildren = passanger.children!.length; // DECIRLE A TYPESCRIPT QUE NUNCA VA A RECIBIR UN NULO
    console.log(passanger.name, howManyChildren);

    return howManyChildren;

}

printChildren(passanger1);