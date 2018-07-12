function findmax()
{
var i;
var x;
var max=0;
for(i=0;i<arguments.length;i++)
{
if(arguments[i]>max)
{
max=arguments[i];
}
}
return max;
}
x=findmax(1,2,3,4,5,6,7,8,9,10,0001);
console.log(x);