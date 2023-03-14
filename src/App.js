
import './App.css';
import { useState } from "react";

function App() {
  const[todolist,setTodolist] = useState([]);
  const[newTask,setNewTask] = useState("");

   const handleChange= (event)=>{
      setNewTask(event.target.value);
   }

   const addNewTask = () =>{
     setTodolist([...todolist,newTask]);
   }

   const deleteTask = (taskName) =>{
    const newTodoList1 = todolist.filter((task)=>{
      if(task === taskName){
        return false;
      }else{
        return true;
      }
      
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
          <div>
        <h1>{task}</h1>
        <button onClick={()=> deleteTask(task)}>X</button>
        </div>
        );
      }
      )}
     </div>
     
    </div>
  );
}

export default App;
