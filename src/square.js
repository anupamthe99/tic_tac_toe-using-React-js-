import React from 'react'

const Square = ({value,change_value,color}) => {
    console.log(color)
  return (
    <div className="square"  onClick={change_value} style={color}>{value}</div>
  )
}

export default Square