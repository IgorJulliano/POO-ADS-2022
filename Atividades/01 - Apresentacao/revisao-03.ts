import { getDouble, max } from "../../utilities/io_utils.ts";

function main() {
    
    const num1 = getDouble("Insert a number -> ");
    const num2 = getDouble("Insert another number -> ");
    const num3 = getDouble("Another one... -> ");

    const maxNumber = max([num1, num2, num3]);
    

    console.log(`Max number: ${maxNumber}`);
}

main();