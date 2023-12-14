import React, { useState } from 'react'
import './todohomepage.css'
import { MdDelete } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';

function Todohomepage() {
  const [name, setName] = useState("")
  const [task, setTask] = useState([])

  const change = (e) => {
    setName(e.target.value)
  }

  const show = () => {
    setTask([...task, name])
    setName('')
  }
  const handledelete = (index) => {
    const updateTask = [...task];
    updateTask.splice(index, 1);
    setTask(updateTask);
  }
  return (
    <div id='a'>
      <h1 className='head'>TODO HOME PAGE</h1>

      <div id='border'>
        <div id='margin'>
          <input className='ip' value={name} onChange={change} id='input' type='text'></input>
          <button onClick={show} id='in' >ADD</button>
        </div>
      </div>
      <div>
        {
          task.map((item, index) => (
            // <div  key={index}>{item}<button onClick={() => handledelete(index)}><MdDelete /></button></div>
            <Stack gap={3}>
      <div className="p-2" >{item}< MdDelete id='del' onClick={()=>handledelete(index)}/></div>
      
    </Stack>
          ))
        }
      </div>
    </div>
  )
}

export default Todohomepage


