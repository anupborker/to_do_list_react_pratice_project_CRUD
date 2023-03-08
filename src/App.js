
import './App.css';
import { useState } from "react";

function App() {
  const[addTask,setAddTask] = useState(0);
  const[newTask,setNewTask] = useState("");
  return (
  <div className="App"> 
     <div className="addTask">
      <input type="text" />
      <button>Add Task</button>
     </div>
     <div className="list"></div>
    </div>
  );
}

export default App;
