import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)
    const pageitems=10
    async function fetchData(){
        setLoading(true)
        try {
            const response=await fetch("https://dummyjson.com/products");
            const data=await response.json()
            setData(data.products)
            console.log(data.products)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    const last=pageitems*page;
    const first=last-pageitems
    const dataPages=data.slice(first,last)

  return (
    <>
        <h1 className='bg-amber-500 rounded-2xl m-5 text-center'>Fetch Products ({page})</h1>
        <div>
            {loading && <h3 className="text-center bg-amber-200 rounded-2xl">Loading...</h3>}
            {error && <h3>{error}</h3>}
            {dataPages && dataPages.map(product=>(
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,fr)",width:"500px",gap:"15px",textAlign:"center"}}>
                <div key={product.id} style={{border:"1px solid "}}>
                    <p> Title: {product.title}</p>
                    <p>Price : {product.price}</p>
                </div>
                
                </div>
                
            ))}
            <div className='text-center gap-3.5 m-2 p-2'>

            <button className='bg-blue-300 p-2' onClick={()=>setPage(prev=>prev-1)}>Prev</button>
            <button className='bg-red-400  p-2' onClick={()=>setPage(prev=>prev+1)}>Next</button>
            </div>
        </div>

    </>
  )
}

export default FetchData