import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    let navigate=useNavigate()
  return (
    <div>
        <h3 style={{textAlign:"center"}}>This is the Tasks Site, Click on button to Tasks...</h3>
      
      <br />
      <button style={{display:"flex",justifyContent:"center",position:"absolute",left:"45%",backgroundColor:"#5858F9",border:"none",padding:"6px",color:"white",fontSize:"16px",cursor:"pointer"}} onClick={()=>navigate("/tasks")}>Go to Tasks</button>
    </div>
  )
}

export default LandingPage;
