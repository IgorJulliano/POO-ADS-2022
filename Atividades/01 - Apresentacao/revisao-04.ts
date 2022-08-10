import { getDouble } from "../../utilities/io_utils.ts";

function main() {
    // Escreva um programa que apresente o mês por extenso, a partir de um número
    
    const monts = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    const monthNumber = getDouble("Insert a number that represents a month (1-12) -> ");

    const month = monts[monthNumber - 1];
    

    console.log(`${monthNumber}˙ month: ${month}`);
}

main();
