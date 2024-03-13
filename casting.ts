let anything:any = "hello";

console.log((anything as string).length);
console.log((<string>anything).length);
