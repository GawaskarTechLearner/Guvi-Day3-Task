// String title Arrow method


let data = "guvi zen class test"; 
var greet = (dataVal) => { 
        
dataVal = dataVal.split(' ');

for(let i=0;i<dataVal.length;i++)
{
dataVal[i]= dataVal[i].charAt(0).toUpperCase() +dataVal[i].slice(1);
}

return dataVal.join(' ');
    }; 
      
    greet(data); 
