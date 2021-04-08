import React from 'react'

function Donut(props) {
  return (
    <div>
      <p>Hey I am a Donut</p>
      <ul>
        <li>{ props.list[0]}</li>
      </ul>
    </div>
  )
}

export default Donut
