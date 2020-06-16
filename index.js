
function convertNum ()
{
let decimalNum = number  =>
{
    return (number >>> 0).toString(2);
}
//i have no idea what the logic behind this is to make it work, but it is explained on mdn and stack overflow as using the radix 2 in the toString method, changes the number it has been given, into binary output

let binaryNum = decimalNum (45)
//setting the number you want to change into binary here

console.log(binaryNum)
}

convertNum()
