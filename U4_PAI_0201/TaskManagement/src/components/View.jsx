import React, { useContext } from 'react'
import { TaskContext } from './TaskContextProvider'

const View = () => {
    const {task,handleSubmit}=useContext(TaskContext)
    console.log(task)
  return (
    <div>
        <button onClick={handleSubmit}>Fetch Tasks</button>
    </div>
  )
}

export default View
