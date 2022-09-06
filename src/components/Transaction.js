import React from 'react';

function Transaction(props) {
    
    function textchange(e){
        props.setText(e.target.value)
        console.log(props.text);
    }

    function numchange(e){
        props.setValue(e.target.value)
        console.log(props.value);
    }

    function sbm(e){
        e.preventDefault()
        if(props.text!=='' && props.value !==''){
            const arr = [...props.data,{
                value:props.value,
                text:props.text
            }]
    
            props.setData(arr)
            props.setText('')
            props.setValue('')
            
        }
        


        console.log(props.data);
    }



    return (
        <div className='Transaction'>
            <form onSubmit={sbm}>
                <h4 className='tr'>Info</h4>
                <input type='text' onChange={textchange} value ={props.text}></input>
                <h4 className='tr'>Amount</h4>
                <input type="number" onChange={numchange} value ={props.value}></input>
                <button id='subbut'>Click</button>
            </form>
        </div>
    );
}

export default Transaction;