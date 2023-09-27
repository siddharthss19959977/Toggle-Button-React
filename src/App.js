import React from 'react';
import { useState } from 'react';
import "./App.css";

function App() {
    
    const[tasks,setTasks]=useState([
        {id:1,name:"Cadburry"},
        {id:2,name:"Kitkat"},
        {id:3,name:"Gems"},
        {id:4,name:"Snickers"},
        {id:5,name:"Skittles"}
    ]);

    const[show,setShow]=useState(true);

    function Delete(id)
    {
        setTasks(tasks.filter(task=>task.id!==id));
    }

  return (
    <div className="App">
        <h1>Chocolate Brands</h1>
        <ul>
            <button onClick={() => setShow(!show)} className='trigger'>Toggle</button>
            {show && tasks.map((task)=>(
                    <li key={task.id}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => Delete(task.id)} className='delete'>Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default App;