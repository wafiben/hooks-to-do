import CardTask from "./Components/CardTask";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Add from './Components/Add';
function App() {
  const initTasks = [
    { id: 0, description: "coding", done: false },
    { id: 1, description: "meeting my mom", done: false },
  ];
  const [tasks,setTasks]=useState(initTasks)
  const addTask=(task)=>{
    setTasks([...tasks,task])
  }
  const deleteTask=(id)=>{
   setTasks(tasks.filter((elt)=>elt.id!==id))
  }
  return <div style={{margin:"auto"}}>
    <Add addTask={addTask}/>
    {tasks.map((elt,index)=><CardTask deleteTask={deleteTask} task={elt}  index={index} key={elt.id}/>)}
    <div>
      this task are undone
      {tasks.filter((task)=>task.done===false).map((elt)=>(<h1>{elt.description}</h1>))}
    </div>
  </div>;
}

export default App;
