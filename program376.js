 

class Demo
{    

         constructor( A,  B)
         {
            this.iNo1 = A;
            this.iNo2 = B;


         }

         Addition()
         {
            return this.iNo1 + this.iNo2;   
         }

         Substraction()
         {
               return this.iNo1 - this.iNo2;   

         }

}

function  main()
{
   let obj = new Demo(11,21);

   let iRet = 0;
   iRet = obj.Addition();
   console.log("Addition is :", iRet );

   iRet = obj.Substraction();
   console.log("Substraction is :",iRet );

}
main();