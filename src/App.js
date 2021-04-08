import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Donut from './components/Donut/Donut';
import PopUp from './components/PopUp/PopUp'

function App() {
  const [balance, setBalance] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [isbackColorGr, setBackColorGr] = useState(true);
  const [balanceColor, setBalanceColor] = useState('yelow')
  const [list, setList] = useState([]);
  
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
      setList([1,2])
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
      <Header decBtnHandler={() => decBtnHandler()} incBtnHandler={() => incBtnHandler()} balance={balance} color={ balanceColor}/>
        {
          popUp ? <div className="pop-up" >
            <PopUp click={togglePop} backColor={isbackColorGr} count={countHandler}/>
          </div> : null
        }
      <Donut list={ list }/>
    </div>
    )
}

export default App
