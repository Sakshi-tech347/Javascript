 

function CountDigit(no)
{
    let iCount = 0;
    let iDigit = 0;
    
    iDigit = no % 10;
    iCount++;
    no = Math.floor(no / 10);

    return iCount;
}

function main()
{
    let iValue= 123;
    let iRet = 0;

    iRet = CountDigit(iValue);

    console.log(`${iValue} contains  ${iRet} Digit `);


}

main();