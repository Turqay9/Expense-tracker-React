import {useState} from 'react'
import './App.css';
import Balance from './components/Balance'
import History from './components/History'
import Transaction from './components/Transaction'


function App() {
    const[data,setData]= useState([])
    const[value,setValue]= useState('')
    const[text,setText]= useState('')
    // setData()

    function deletelist(index) {
      const deletedArray = [...data]
      deletedArray.splice(index, 1)

      
      setData(deletedArray)
      // setValue('')
  }

    


  


  return (
    <div className="App">
      <h2 id='tracker'>Expence Tracker</h2>
      <p className="parag">If the transaction amount is less than zero, then the expense increase.If the transaction amount is greater than zero, then the income increases</p>
      <Balance data={data}  />
      <History data={data} deletelist={deletelist} />
      <Transaction  setData ={setData} data ={data} value ={value} setValue ={setValue} text ={text} setText={setText}/>
    </div>
  );
}

export default App;
