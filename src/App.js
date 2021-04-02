import React, {useState, useEffect} from 'react'
import './App.css'
import PopUp from './PopUp'

function App() {
  const [balance, setBalance] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [isbackColorGr, setBackColorGr] = useState(true);

  const decBtnHandler = (amount) => {
    const finalAmount = balance - amount;
    setBalance(finalAmount)
    setBackColorGr(false)
    setPopUp(true)
  }

  const incBtnHandler = (amount) => {
    const finalAmount = balance + amount;
    setBalance(finalAmount)
    setBackColorGr(true)
    setPopUp(true)
  }

  const togglePop = () => {
   setPopUp(false);
  };


  return(
    <div className="App">
      <h1>My Cash App</h1>
      <div className="main-body">
        <div className = 'btn-container'>
          <button onClick = { () => decBtnHandler(10)} className='btn' id='dec-btn'>-</button>
          <button onClick = {() => incBtnHandler(10)} className='btn' id='inc-btn'>+</button>    
        </div>
        <h3 id='balance'>{balance}</h3>
        {
          popUp ? <div className="pop-up" >
            <PopUp click={ togglePop } backColor = {isbackColorGr} />
          </div> : null
        }
      </div>
    </div>
    )
}

export default App
