const names:string[] = ["John", "Jane", "Doe"];
names.push("Lucas")

const readOnlyArray: readonly string[] = ["Boba", "JarJar", "Yoda"];
//push does not exist in readonly arrays

let firstName:string = readOnlyArray[0];

