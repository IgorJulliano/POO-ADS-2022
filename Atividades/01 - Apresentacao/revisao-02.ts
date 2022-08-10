import { getDouble } from "../../utilities/io_utils.ts";

function main() {
    
    const realQtd = getDouble("Insert how much money you have -> ");
    const cryptoValue = getDouble("Insert the current Bitcoin price -> ");

    const value = realQtd / cryptoValue;

    console.log(`R$ ${realQtd.toFixed(2)} in bitcoin woth: ${value.toFixed(8)}`);
}

main();