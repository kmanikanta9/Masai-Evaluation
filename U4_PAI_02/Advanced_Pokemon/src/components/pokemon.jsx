import React, { useEffect } from "react";
import { useState } from "react";

function Pokemon(){
    const [data,setData]=useState([])
    const [loading,setlodaing]=useState(false)
    const [errors,setError]=useState(null)

    async function fetchData(){
        try {
            setlodaing(true)
            let res=await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
            let result=await res.json()
            setData(result.results)
            console.log(result.results)
            setlodaing(false)
        } catch (error) {
            setError(error)
            setlodaing(false)
        }
        finally{
            setlodaing(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    return (
        <>
        <div>
            {loading && <h1>Loading...</h1>}
            {errors && <h1>Data not Found</h1>}
            {data.map((pokemon,index)=>(
                <div key={index}>

                    <p>Name: {pokemon.name}</p>
                
                </div>
                
            ))}
        </div>
        </>
    )
}
export default Pokemon;