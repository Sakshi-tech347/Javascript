
function Addition(no1,no2)
{
   let Ans = 0;
   Ans = no1 + no2;

   return Ans;

}



function main()
{
   let iValue1= 10 , iValue2 = 11;
   let iRet = 0;


   iRet = Addition(iValue1,iValue2);
   console.log("Addition of number is :"+iRet);

}

main();