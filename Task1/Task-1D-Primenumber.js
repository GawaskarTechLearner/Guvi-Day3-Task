let data = [17,78,34,7, 32,23,15,43]; 
const out=function (dataVal) {
       let flag = true;
       let primeNum =[];
    for(let j=0;j<dataVal.length;j++)
{
            for (let i = 2; i <= dataVal[j]-1; i++)
          
                if (dataVal[j] % i == 0) {
                    flag = false;
                    break;
                }
                 
            // Check and display output
            if (flag == true){
                console.log(dataVal[j] + " is prime");
                primeNum.push(dataVal[j]);
            }
            else
            {
                console.log(dataVal[j] + " is not prime");
                flag=true;
            }
        }
        console.log(primeNum);
}
        out(data );
