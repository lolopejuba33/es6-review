import { add, sub, map } from "./tools.js";
import greet from './tools.js';
import { log as logger } from './tools.js';
import { Person } from "./tools.js";
import {DivisibleBy2} from "./tools.js";
console.log(greet('Juba Oluwalolope'));
console.log(add(1,1)); 
console.log(sub(4, 3));
let student1 = new Person ("Juba Oluwalolope",30, 5.11,18)
const a = 5;
DivisibleBy2(a)
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
console.log(map.get(1)); 
logger(`Student1 is ${student1.fullname}
    with id number ${student1.id}
    who is ${student1.age} years old and ${student1.height}ft tall`);
    
