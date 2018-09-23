import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>My name is:</p>
      <p>{ props.userName }</p>
    </div>
  )
}

export default userOutput