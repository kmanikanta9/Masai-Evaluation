import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddSnack from './components/addsnack'
import DisplaySnack from './components/displaysnack'

function App() {
  const [snackdata,setSnackdata]=useState()
  
  async function fetchdata(){
    let res=await fetch("https://data-46361-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json")
    let data=await res.json()
    let d=Object.entries(data).map(([id,e])=>({id,...e}))
    console.log(d)
    setSnackdata(d)
  }
  useEffect(()=>{
    fetchdata()
    
  },[])
  const [snack, setSnack] = useState({
    title:"",
    category:"",
    price:"",
    rating:""
  })
  if(!snackdata) return <h1>Loading...</h1>

  return (
    <>
      <DisplaySnack data={snackdata}/>
      <AddSnack item={{snack,setSnack}}/>
    </>
  )
}

export default App
