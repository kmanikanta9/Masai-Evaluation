import React, { useEffect, useState } from 'react'

const Tasks = () => {
    const [tasks,setTasks]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    async function fetchTasks(){
        setLoading(true)
        try {
            let response=await fetch("https://tasks-81a7a-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json")
            let result=await response.json()
            let tasksArray=Object.entries(result).map(([id,task])=>({id,...task}))
            console.log(tasksArray)
            setTasks(tasksArray)
            setLoading(false)
        } catch (error) {
            setError("Tasks Not Found")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchTasks()
    },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {tasks && tasks.map((task)=>(
            <div key={task.id} style={{border:"1px solid",boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",textAlign:"center"}}>
                <p> Title:{task.title}</p>
                <p> Description: {task.description}</p>
                {/* <p>Status:{task.completed}</p> */}
            </div>
        ))}
      
    </div>
  )
}

export default Tasks
