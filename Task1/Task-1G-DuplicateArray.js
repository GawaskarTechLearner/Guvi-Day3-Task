//Ananymous Function
let arr = ["apple", "mango", 
          "apple", "orange", "mango", "mango"]; 
  
let dataout = function(arr) { 
    let unique = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
   console.log(unique); 
} 
dataout (arr);


//IIFE Function


let arr = ["apple", "mango", 
          "apple", "orange", "mango", "mango"]; 
  
(function(arr) { 
    let unique = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
   console.log(unique); 
})(arr);
