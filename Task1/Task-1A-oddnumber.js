//Find Odd number using IIFE method

 const data = [11,12,13,14,15,16,17,22,23,24,25];	
(function () { 
       

for(let i=0;i<data.length;i++)
{
if(data[i]%2 !==0)
{
console.log(data[i]);
}

}
    })(); 


//Find Odd number using Anonymous method

 const data = [11,12,13,14,15,16,17,22,23,24,25];
var greet = function () { 
        
for(let i=0;i<data.length;i++)
{
if(data[i]%2 !==0)
{
console.log(data[i]);
} 
}
    }; 
      
    greet(); 
