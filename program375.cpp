#include<iostream>
using namespace std;

class Demo
{

      public :
         int iNo1 , iNo2;

         Demo(int A, int B)
         {
            this->iNo1 = A;
            this->iNo2 = B;

            cout<<"Inside Constructor ";

         }

}

int main()
{
   Demo * obj = new Demo(11,21);

   return 0;
}