
function perfectNumber(no)
{
    let iCnt = 0;
    let iSum = 0;

    for(iCnt = 1; iCnt < (no/2); iCnt++ )
    {
        iSum = iSum + iCnt;
    }

    if (iSum == no)
    {
        return true;
    }
    else
    {
        return false;
    }


}

function main()
{
    let iValue = 20;
    let bRet = 0;

    bRet = perfectNumber(iValue);

    if (bRet == true )
    {
    console.log(`${iValue} is a perfect number`);

    }
    else
    {
    console.log(`${iValue} is NOT a perfect number`);
        
    }
}

main();