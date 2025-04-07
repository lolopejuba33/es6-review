export const log = function(output) {
    console.log(output);
}
export function add(x,y){
    return x + y;
    }
export function sub(x, y) {
    return x-y;
    }
export default function Fullname(firstname, lastname) {
    return `Hello, ${firstname + ' ' + lastname}!`;
}
export class Person {
    constructor(fullname,id,height, age) {
    this.fullname = fullname;
    this.id = id;
    this.height = height;
    this.age = age;
}
}
export function DivisibleBy2(a) {
    return new Promise((resolve, reject) => {
      if (a % 2 === 0) {
       resolve(`${a} is divisible by 2`)}
    else{
       reject(`${a} is NOT divisible by 2`);
      }
    });
  }
export const map = new Map([
    [ 1, 'one' ],
    [ 2, 'two' ],
    [ 3, 'three' ], 
    ])
    