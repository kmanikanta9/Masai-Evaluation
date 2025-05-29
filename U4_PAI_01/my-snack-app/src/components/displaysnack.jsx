export default function DisplaySnack({data}){
    return(
        <>
            <div id="snack-display">
                {data.map((e)=>(
                    <div>
                        <p>{e.title}</p>
                        <p>{e.category}</p>
                        <p>{e.price}</p>
                        <p>{e.rating}</p>

                    </div>
                
                ))}
            </div>
        </>
    )
}
