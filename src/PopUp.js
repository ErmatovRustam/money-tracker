import React from 'react'
import './PopUp.css'

function PopUp(props) {
  const handleClick = () => {
    props.click()
  }

  const style = {
    backgroundColor: 'red'
  }

  return (
    <div className="modal_content" style={{ backgroundColor: props.backColor ? '#a0e1bb' : '#f7adac' }}>
      {console.log(props.backColor)}
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
