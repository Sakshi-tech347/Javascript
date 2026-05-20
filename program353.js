 

function SumOfDigit(no)
{
    let iSum = 0;
    let iDigit = 0;
    let iCnt = 0;

    
    while(no != 0 )
    {
        iDigit = no % 10;
        iSum = iSum+iDigit;
        no = Math.floor(no / 10);

        
    }
    return iSum;
}

function main()
{
    let iValue= 123;
    let iRet = 0;

    iRet = SumOfDigit(iValue);

    console.log(`Summation of Digit is ${iRet} `);


}

main();