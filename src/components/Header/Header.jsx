import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div>
            <h1>My Cash App</h1>
              <div className = 'btn-container'>
                <button onClick = { () => props.decBtnHandler(10)} className='btn' id='dec-btn'>-</button>
                <button onClick = {() => props.incBtnHandler(10)} className='btn' id='inc-btn'>+</button>    
              </div>
              <h3 id='balance' style={{ backgroundColor : props.color } } >$ {props.balance} </h3>
        </div>
        
    )
}

export default Header
