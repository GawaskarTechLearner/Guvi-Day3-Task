//Ananymous Function
let arrVal1 = [1, 4, 6, 7, 9];
let arrVal2 = [2, 3, 5, 8, 10];

let n1 = arrVal1.length;
let n2 = arrVal2.length;




let out = function(arrVal1, arrVal2, n1, n2)
{
	
if(n1 == n2)
{
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n1; count++)
    {
        if (i == n1)
        {
            m1 = m2;
            m2 = arrVal2[0];
            break;
        }
 
        else if (j == n1)
        {
            m1 = m2;
            m2 = arrVal1[0];
            break;
        }
       
        if (arrVal1[i] <= arrVal2[j])
        {
            m1 = m2; 
            m2 = arrVal1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = arrVal2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
else
{
console.log("array not match");
}
}
out(arrVal1, arrVal2, n1,n2);





//IIFE Function
let arrVal1 = [1, 4, 6, 7, 9];
let arrVal2 = [2, 3, 5, 8, 10];

let n1 = arrVal1.length;
let n2 = arrVal2.length;




(function(arrVal1, arrVal2, n1, n2)
{
	
if(n1 == n2)
{
    var i = 0;
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n1; count++)
    {
        if (i == n1)
        {
            m1 = m2;
            m2 = arrVal2[0];
            break;
        }
 
        else if (j == n1)
        {
            m1 = m2;
            m2 = arrVal1[0];
            break;
        }
       
        if (arrVal1[i] <= arrVal2[j])
        {
            m1 = m2; 
            m2 = arrVal1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = arrVal2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
else
{
console.log("array not match");
}
})(arrVal1, arrVal2, n1,n2);
