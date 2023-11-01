//sum of numbers using IIFE method

 const data = [11,12,13,14,15,16,17,22,23,24,25];	
(function () { 
       
 let sum =0;
for(let i=0;i<data.length;i++)
{
sum+=data[i];
}
console.log(sum);


    })(); 


//sum of numbersusing Anonymous method

 const data = [11,12,13,14,15,16,17,22,23,24,25];
var greet = function () { 
        
 let sum =0;
for(let i=0;i<data.length;i++)
{
sum+=data[i];
}
console.log(sum);

    }; 
      
    greet(); 
