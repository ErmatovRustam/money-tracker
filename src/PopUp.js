import React from 'react'
import './PopUp.css'

function PopUp(props) {
  const handleClick = () => {
    props.click()
  }

  return (
    <div className="modal_content">
          <span className="close" onClick={handleClick}>  &times;{' '}</span>
          <div className = 'form-content'>
            <form id = 'form'>
                    <label for = 'amount'> Amount </label>
                    <input type="number" id="amount" />
                    <label for = 'name'> Tag name </label>
                    <input type="text" id="name" />
                    <br />
                    <button>Submit</button>
                </form>
          </div>
          
    </div>
  )
}

export default PopUp
