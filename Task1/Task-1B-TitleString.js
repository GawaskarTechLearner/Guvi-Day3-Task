// String title IIFE
 let data = "guvi zen class test"; 	
(function (dataVal) { 
   
dataVal = dataVal.split(' ');

for(let i=0;i<dataVal.length;i++)
{
dataVal[i]= dataVal[i].charAt(0).toUpperCase() +dataVal[i].slice(1);
}

return dataVal.join(' ');

    })(data); 




// String title Anonymous method

let data = "guvi zen class test"; 
var greet = function (dataVal) { 
        
dataVal = dataVal.split(' ');

for(let i=0;i<dataVal.length;i++)
{
dataVal[i]= dataVal[i].charAt(0).toUpperCase() +dataVal[i].slice(1);
}

return dataVal.join(' ');
    }; 
      
    greet(data); 
