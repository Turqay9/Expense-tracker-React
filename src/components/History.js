import React from 'react';
import List from './List'
import { v4 as uuidv4 } from 'uuid';


function History(props) {


    

    return (
        // <div>
        //    return {
        //     props.data.map((el,index)=>{
        //         return(<List id ={index} value ={el.value} text ={el.text}/>)
        //     }
        //   )
        //   }
        // </div>

<ul className='Historia'>
{
    props.data.map((el, index) => {
        return (
            <List
            id ={()=>props.deletelist(index)} keys={uuidv4()} value ={el.value} text ={el.text}
            />)
        })
}
</ul>
    );
}

export default History;