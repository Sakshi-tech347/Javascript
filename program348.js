 

function CountDigit(no)
{
    let iCount = 0;
    let iDigit = 0;

    iDigit =no % 10 ;
    iCount++;
    no = no/10; issue 
    

    return iCount;
}

function main()
{
    let iValue = 1534;
    let iRet = 0;

    iRet = CountDigit(iValue);

    console.log(`${iValue} contains ${iRet} Digit `)

}

main();