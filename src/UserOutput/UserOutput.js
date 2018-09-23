import React from 'react'

const userOutput = (props) => {

  const style = {
    fontWeight: '800'
  }

  return (
    <div>
      <p>My name is:</p>
      <p style={style}>{ props.userName }</p>
    </div>
  )
}

export default userOutput