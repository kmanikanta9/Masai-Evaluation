import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

  return (
    <div style={{gap:"20px",margin:"20px",textDecoration:"none",border:"1px solid",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
        <div style={{margin:"20px",textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
            <Link style={{textDecoration:"none",border:"0.3px solid",padding:"6px",borderRadius:"6px"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",border:"0.3px solid",padding:"6px",borderRadius:"6px"}} to="/addtasks">Add Tasks</Link>
            <Link style={{textDecoration:"none",border:"0.3px solid",padding:"6px",borderRadius:"6px"}} to="/tasks">Tasks</Link>
            <Link style={{textDecoration:"none",border:"0.3px solid",padding:"6px",borderRadius:"6px"}} to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar
