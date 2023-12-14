import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";

function Delete() {
    const [enter,setEnter]=useState("")
    const [tasks,setTasks]=useState([])
    const handleTask=(e)=>
    {
      setEnter(e.target.value)
    }
    const handleAdd=()=>
    {
      setTasks([...tasks,enter])
      setEnter('')
    }
    const handleDelete=(index)=>
    {
      const update=[...tasks];
      update.splice(index, 1);
      setTasks(update);
    }
  return (
    <div>
       <h1 id='head'>Todo App</h1>
      <input id='ip' type='text' value={enter} placeholder='enter' onChange={handleTask}></input>
      <Button variant="info" onClick={handleAdd}>Add</Button>
      {
        tasks.map((items,index)=>(
          <li key={index}>{items}<button onClick={()=>handleDelete(index)}><MdDelete /></button></li>
        ))
      }
    </div>
  )
}

export default Delete
