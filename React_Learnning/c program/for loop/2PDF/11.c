#include<stdio.h>

int main ()
{
int i,j,k=1;
for(i=1;i<=5;i++)
{
	for(j=1;j<=i;j++)
	{
		printf("%d",k);
		if(k==0)
		{
			k=1;
		}else
		{
	        k=0;
		}
	}
	printf("\n");
}
return 0;
}