#include<stdio.h>
int main()

{
  int  i,a[5],sum=0;
     for(i=0;i<=4;i++)
	 {
	    printf("enter the value =");
		scanf("%d",&a[i]);
	 }
     for(i=0;i<=4;i++)
	 {
	    sum+=a[i];
	 }
	printf("%d",sum);
	
  return 0; 
}