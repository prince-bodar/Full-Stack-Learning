#include<stdio.h>

int main()
{
  int i=1,j,k=65;
   
       do{
	        j=1;  
			          do{
					      printf("%c\t",k++);
						  j++;
					    }while(j<=5);
			printf("\n");
			i++;
		 }while(i<=5);
     return 0;
}