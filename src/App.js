
import './App.css';
import { useState } from "react";
import { Task } from "./Task"

function App() {
  const[todolist,setTodolist] = useState([]);
  const[newTask,setNewTask] = useState("");

   const handleChange= (event)=>{
      setNewTask(event.target.value);
   }

   const addNewTask = () =>{
    const task = {
      id: todolist.length ===  0 ? 1 : todolist[todolist.length - 1].id + 1,
      name: newTask,
      complete: false
    }
     setTodolist([...todolist,task]);
   }

   const deleteTask = (id) =>{
    const newTodoList1 = todolist.filter((task)=>{
      if(id === task.id  ){
        return false;
      }else{
        return true;
      }
      const newComplete = todolist.map((task)=>{
        {task.complete && <span style={{color:"green"}}>{task.name}</span> }
      });
      
    }); setTodolist(newTodoList1);

   }

  return (
  <div className="App"> 
     <div className="addTask">
      <input type="text" onChange={handleChange} />
      <button onClick={addNewTask}>Add Task</button>
     </div>
     <div className="list">
      {todolist.map((task)=>{
        return (
         <Task id={task.id}  name={task.name} deleteTask={deleteTask}   />
        );
      }
      )}
     </div>
     
    </div>
  );
}

export default App;
