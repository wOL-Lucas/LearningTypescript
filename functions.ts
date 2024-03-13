const returnsNumber = ():number => {
  return 1;
}


const returnsString = ():string => {
  return "Hello World";
}

const returnsNothing = ():void => {
  console.log("Hello World");
}

const sum = (a:number, b:number):number => {
  return a + b;
}

const printTheId = (id: number | string) => {
  console.log(`ID: ${id}`);
};


const ifParamReturnBoolean = (param?:string):boolean => {
  return param ? true : false;
}
