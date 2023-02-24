import './App.css';
import { useState } from 'react';

function App() {
  const[myInput,setMyInput]=useState("")
  const[todoList, setTodoList]=useState([])


  const handleInput=(event)=>{
    setMyInput(event.target.value)

  }
  const handleTask=()=>{
    const task={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: myInput,
      completed:false
    }
   const newList=[...todoList,task]
   setTodoList(newList)
  }

  const deleteTask=(id)=>{
    const newList =todoList.filter((task)=>{
      if (task.id===id){
        return false
      }else{
        return true
      }
    })
    setTodoList(newList)
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInput}/>
      <button onClick={handleTask}>Add Task</button> 
      <div>
        {todoList.map((task)=>{
          return (
            <div style={{display:"flex", alignItems:"center", gap:"10px ", justifyContent:"center",backgroundColor: task.completed ? "green" : "white"}}>
            <h1>{task.taskName}</h1>
            <button onClick={()=>completeTask(task.id)}>Completed</button>
            <button onClick={()=>deleteTask(task.id)}>x</button>
            <h1>{task.completed}</h1>
            </div>
          )
        })}
      </div>
       
    </div>
   
  );
}

export default App;
