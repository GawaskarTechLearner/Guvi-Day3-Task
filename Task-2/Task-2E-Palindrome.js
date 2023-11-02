let data = ["gawas","appa","uncle","amma"]; 
((dataVal) => {
      
       let palin=[];
    for(let j=0;j<dataVal.length;j++)
{
          const arrval= dataVal[j].toString().split('');
		const reverseval = arrval.reverse();

		const output = reverseval.join('');

          
           
            if (dataVal[j] == output){
                console.log(dataVal[j] + " is palindrome");
                palin.push(dataVal[j]);
            }
            else
            {
                console.log(dataVal[j] + " is not palindrome");
               
            }
       
        console.log(palin);
}
})(data );
