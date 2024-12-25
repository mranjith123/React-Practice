import React from 'react'

const Todolistdelete = ({todolist,deleteHandler}) => {
  return (
    <div>
        {todolist.map((todo,index) =>  //index is unique value
        <div key={index}>
            <h2>{todo} &nbsp;<button onClick={() => deleteHandler(index)}>Delete</button></h2>
        </div>
        )}

    </div>
  )
}
export default Todolistdelete;
