 
function maximum(Brr)
{

   let iCnt = 0;

   let iMax = 0;
   for (iCnt = 0 ; iCnt < Brr.length ; iCnt ++)
   {
      if(Brr[iCnt] > iMax)
      {
         iMax = Brr[iCnt];
      }
   }

   return iMax;
}



function main()
{
   const  Arr = [10,20,30,40]


   let iRet = 0;
   iRet = maximum(Arr)

   console.log("maximum element is ", iRet);
   
}

main();