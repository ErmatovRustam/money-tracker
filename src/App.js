import React, {useState, useEffect} from 'react'
import './App.css'
import PopUp from './PopUp'

function App() {
  const [balance, setBalance] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [isbackColorGr, setBackColorGr] = useState(true);
  const [balanceColor, setBalanceColor] = useState('yelow')
  
  const incBtnHandler = (amount) => {
    setPopUp(true)
    setBackColorGr(true)
  }
    const decBtnHandler = (amount) => {
    setPopUp(true)
    setBackColorGr(false)
  }

  const countHandler = (val, tag) => {
    if (isbackColorGr) {
      const finalAmount = Number(balance) + Number(val);
      setBalance(finalAmount)
      checkBalanceColor(finalAmount)
    } else {
      const finalAmount = Number(balance) - Number(val);
      setBalance(finalAmount)
      checkBalanceColor(finalAmount)
    }
    setPopUp(false);
    
  };

  const togglePop = () => {
   setPopUp(false);
  };

  const checkBalanceColor = (bal) =>{
    if (bal > 0) setBalanceColor('#c2ebd3')
    if (bal < 0) setBalanceColor('#e9c3c3')
    if (bal === 0) setBalanceColor('#f0f5b1')
  }
  
  return(
    <div className="App">
      <h1>My Cash App</h1>
      <div className="main-body">
        <div className = 'btn-container'>
          <button onClick = { () => decBtnHandler(10)} className='btn' id='dec-btn'>-</button>
          <button onClick = {() => incBtnHandler(10)} className='btn' id='inc-btn'>+</button>    
        </div>
        <h3 id='balance' style={{ backgroundColor : balanceColor } } >$ {balance} </h3>
        {
          popUp ? <div className="pop-up" >
            <PopUp click={togglePop} backColor={isbackColorGr} count={countHandler}/>
          </div> : null
        }
      </div>
    </div>
    )
}

export default App
