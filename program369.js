
function Minimum(Brr)
{
   let iCnt = 0
   let imin = Brr[0];

   for(iCnt = 0; iCnt < Brr.length ; iCnt++)
   {
      if(Brr[iCnt] < imin)
      {
         imin = Brr[iCnt];
      }
   }
   return imin;
}

function main()
{
   let Arr = [10,20,30,40];

   let iRet = 0;

   iRet = Minimum(Arr);
   console.log("Minimum number is ", iRet);
}
main();