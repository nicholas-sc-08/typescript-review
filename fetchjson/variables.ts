const apples: number = 90;
const now: Date = new Date();
let colors: string[] = ['red', 'green'];
let truths: boolean[] = [true, false, true];

interface Point {
    x: number;
    y: number;
    z: number;
}

type Functions = (i: number) => void;

let point = {
    x: 12,
    y: -8,
    z: 1
}

const logNumber: Functions = (i: number) => {
    console.log(i);
}

//whem to use annotations
//1. function that returns the 'any' type
const json = '{x: 10, y: 20'
const coordinates = JSON.parse(json);
console.log(coordinates);

let words = ['asad',  'adasdasd'];
let foundWord;

for(let i = 0; i < words.length; i++) {
    
}

class Vehicle  {
    constructor(protected color: string, protected model: string) {}
}

class Car extends Vehicle {
    constructor(color: string) {
        super('asd', 'sasd');
    }
}