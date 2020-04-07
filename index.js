
function convertNum ()
{
let decimalNum = number  =>
{
    return (number >>> 0).toString(2);
}

let binaryNum = decimalNum (45)

console.log(binaryNum)
}

convertNum()
