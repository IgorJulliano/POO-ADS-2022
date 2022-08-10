
export function getDouble(msg?:string): number {

    let num:number = parseFloat(input(msg));
    while (isNaN(num)) {
        console.log("Insert a number");
        num = Number.parseFloat(input(msg));
    }

    return num;
}

export function input(msg?:string) : string {
    return prompt(msg) ?? "";
}

export function max(nums:number[]) : number | undefined {
    // If the array has no data, return undefine.
    if(nums.length == 0) return undefined;

    let maxNumber:number= nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        maxNumber = nums[i] > maxNumber ? nums[i] : maxNumber;
    }
    
    return maxNumber;
}