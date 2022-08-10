import { getDouble } from "../../utilities/io_utils.ts";

function main() {
    
    const number = getDouble("Insert a floating point number with a decimal number -> ");

    const previousInt = Math.trunc(number);
    const nextInt = Math.trunc(number + 1);
    
    console.log(`${previousInt} < ${number} < ${nextInt}`);
}

main()


