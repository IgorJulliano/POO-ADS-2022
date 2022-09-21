
// Questão 1: 
function isEven(num: number): boolean { return num % 2 == 0; }
function isOdd(num: number): boolean { return !isEven(num); }


// Questão 2:
function isPrime(num: number): boolean {

    if (num < 2) return false;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

// Questão 3
function greeting(name: string, pronoun: string = "Sr"): void {
    console.log(`Hello, ${pronoun}. ${name}. Welcome back!`);
}

// Questão 4
function joinHyphen<T>(array: T[]): string {
    let builder: string[] = [];

    array.forEach((item, index) => {
        builder.push(`${item}`);
        if (index < array.length - 1) {
            builder.push("-");
        }
    });

    return builder.join("");
}

// Questão 5
function soma(x: number, y?: any): number {
    return x + y
}
function q5Execution() {
    console.log(soma(1, 2));   // 3
    console.log(soma(1, "2")); // 12
    console.log(soma(1));      // NaN
}

// Questão 6
function logAll(...texts:string[]) {
    texts.forEach((text) => console.log(text));
}

// Questão 7
const ola = () => {
    console.log("Hello");
}

// Questão 8
const filterEvenNumbers = (numbers:number[]) => {
    let evenNumbers :number[]= []
}