import React from 'react'

const userInput = (props) => {
  return (
    <div>
      <input type="text" value={props.userName} onChange={props.change}/>
    </div>
  )
}

export default userInput