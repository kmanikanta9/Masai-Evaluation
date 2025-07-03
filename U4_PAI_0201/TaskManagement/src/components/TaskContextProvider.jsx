
import React, { createContext, useState } from 'react'

export const TaskContext = createContext()
export const TaskContextProvider = () => {
   const [task,setTasks]=useState({
          title:"",
          description:"",
          completed:false
      })
      async function handleSubmit(e){
        e.preventDefault()
       let res=await fetch("https://tasks-81a7a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",{
        method:"POST",
        body:JSON.stringify(task),
        headers:{"Content-Type":"application/json"}

       })
       setTasks({
          title:"",
          description:"",
          completed:false}
       )
    }
  
      function handleChange(e){
          const {name,value}=e.target;
          setTasks({...task,[name]:value})
      }
   
      if(!task) return <h1>Loading...</h1>
    return (
      <>
      
      <TaskContext.Provider value={{task,handleSubmit}}>

      <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit}>
          <label >
              Title:
              <input type="text" value={task.title} name='title' onChange={handleChange} placeholder='Enter Title Here...' style={{padding:"6px",margin:"15px",borderRadius:"6px"}}/>
          </label>
          <label >
              Description:
              <input type="text" value={task.description} name='description' onChange={handleChange} placeholder='Enter Description Here...' style={{padding:"6px",margin:"15px",borderRadius:"6px"}}/>
          </label>
          <button style={{display:"flex",justifyContent:"center",position:"absolute",left:"45%",backgroundColor:"#5858F9",border:"none",padding:"6px",color:"white",fontSize:"16px",cursor:"pointer"}} type='submit'>Submit</button>
        </form>
      </div>
      </TaskContext.Provider>
  
      
  
  
      </>
    )
}


