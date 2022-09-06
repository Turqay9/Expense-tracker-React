import React from 'react';

function Balance(prp) {
    let sum =0
    let sum2 =0
   prp.data.forEach(el=>{
       
       if(el.value>0){
            sum += parseInt(el.value)
            console.log(sum);
       }else{
           sum2 += parseInt(el.value)
           console.log(sum2);
       }
   })

   let tot = sum +sum2

    
    return (
        <div className='Balance'>
            <div id='bal'>
            <h3 id='totall'>Total : {tot}</h3>
            <div id='inex'>
            <p> INCOME : <span id='fir'>{sum}</span> </p>
            <p> EXPENCE : <span id='sec'>{sum2}</span> </p>
            </div>
            </div>
        </div>
    );
}

export default Balance;