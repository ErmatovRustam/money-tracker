import React, {useState} from 'react'
import './PopUp.css'

function PopUp(props) {
  const [value, setValue] = useState(0);
  const [tag, setTag] = useState('');
  const handleClick = () => {
    props.click()
  }

  const style = {
    backgroundColor: 'red'
  }

  const tagChanger = (e) => {
    setTag(e.target.value)
  }

  const valChanger = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="modal_content" style={{ backgroundColor: props.backColor ? '#a0e1bb' : '#f7adac' }}>
          <span className="close" onClick={handleClick}>  &times;{' '}</span>
          <div className = 'form-content'>
            <form id = 'form'>
                    <label for = 'amount'> Amount </label>
          <input type="number" id="amount" placeholder = {0} onChange = {valChanger} hint = 'please enter number' />
                    <label for = 'name'> Tag name </label>
          <input type="text" id="name" placeholder = 'Rent'  value={tag } onChange={tagChanger} hint = 'please enter name for the amount ' />
                    <br />
          <button onClick={() => props.count(value, tag)}>Submit</button>
                </form>
          </div>
          
    </div>
  )
}

export default PopUp
