let tuple: [number, boolean, string] = [1, true, "Thats it"];


let readOnlyTuple: readonly [number, boolean, string] = [1, true, "Thats it"];

// tuple haves no security for the next pushed elements. Good practive to make 'em readonly'

// Named tuple \
const person: [name:string, age:number] = ["Max", 30];

// Destructuring
const [personName, personAge] = person;


