import React,{useState} from 'react'
import Todolistdelete from './Todolistdelete';
const Todolist= ()=> {
    const [data,setData] = useState("");
    const [todos,setTodos] = useState([]);      //every value add avali ante list use cheyali list means todos name
      const changeHandler = e =>{
        setData(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        const newTodos = [...todos,data];      //form add data save avali ante previous todos add chesukutamu spread operator
        setTodos(newTodos);                    // submit chesina data new todos variable store avutundhi
        setData("");                           //form rest cheyali ante empty string estamu
     }
  const deleteHandler= (indexValue) =>{
const newTodos = todos.filter((todo,index) => index !== indexValue);
setTodos(newTodos); 
}
  return (
    <div>
        <center>
         <div className="card">  {/*//card is bootstrap stylename */}
        <div classname="card-body">
        <h1 className="card-title">Todolist Management Application</h1>
        <form onSubmit={submitHandler}>
         <input type="text" name="data" value={data}  onChange={changeHandler}/> &nbsp;&nbsp;    {/*// "&nbsp;&nbsp "this is bootstrap space */}
        <input type="submit" value="Add" name="Add"/>   
        </form>
        <Todolistdelete  todolist={todos} deleteHandler={deleteHandler}/>
        </div>
        </div>
        </center>
        </div>
  )
}

export default Todolist
