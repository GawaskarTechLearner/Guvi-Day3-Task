//Ananymous Function
let Array = [1, 2, 3, 4, 5]; 
let N = Array.length; 
let K = 2; 
  
let out = function(a, n, k) 
{  
    k = k % n; 
      for (let i = 0; i < n; i++) { 
        if (i < k) {            
            console.log(a[n + i - k] + " "); 
        } 
        else {   
             console.log((a[i - k]) + " "); 
        } 
    } 
   
} 
 out(Array, N, K); 
  




//IIFE Function
