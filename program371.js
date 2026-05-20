

class Demo
{

   
   constructor(No1, No2)
   {
      this.No1 = No1;
      this.No2 = No2;
      console.log("Inside Constructor of Demo ");
      
   }

}
function main()
{
   let obj  = new Demo(11,21);


   console.log(obj.No1);
   console.log(obj.No2);


}
main();