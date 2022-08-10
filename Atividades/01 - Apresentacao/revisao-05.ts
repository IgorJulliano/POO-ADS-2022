import { getDouble } from "../../utilities/io_utils.ts";

function main() {
    // Escreva um programa que imprima os números inteiros entre dois valores lidos.
    
    const min = getDouble("Insert the minimun value -> ");
    const max = getDouble("Insert the maximun value -> ");
    

    // for exclusive range
    //                |
    for (let i = min + 1; i < max; i++) {
        const element = i;
        console.log(`${Math.trunc(element)}`);
    }
}

main();
