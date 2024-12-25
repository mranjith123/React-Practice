import React from 'react'

const ControlledTest = (props) => {
  return (
    <div>
  <input type="text" onChange={props.changeHandler}/>
  </div>
  )
}
export default ControlledTest;